"use client"

import {Card} from 'primereact/card'
import {Dropdown} from 'primereact/dropdown'
import {Divider} from 'primereact/divider'
import {Button} from 'primereact/button'
import {useRef, useState} from "react";
import {OverlayPanel} from "primereact/overlaypanel";
import useGetPastMonthOrderCount from "@/hooks/analytics/useGetPastMonthOrderCount";
import {fetchProductSaleCountByYearQuery} from "@/hooks/api/analytics/fetchProductSaleCountByYear";

const AnalyticProductsSaleCountCard = function (props) {

  const [selectedYear, setSelectedYear] = useState(props.years[props.years.length - 1]);

  const op = useRef(null);

    const {data, isPending, isError, error} =
    fetchProductSaleCountByYearQuery(selectedYear.code)

  const header =
    <div className='pt-3'>
      <div className='flex flex-row px-3 justify-content-between'>
        <div>
          <div className='text-2xl'>Количество товаров</div>
          <div className='text-xs'>Проданых</div>
        </div>
        <Button
          type="button"
          text
          rounded
          icon="pi pi-ellipsis-h"
          onClick={(e) => op.current.toggle(e)}/>
        <OverlayPanel ref={op}>
          <Dropdown
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.value)} options={props.years} optionLabel="name"
            placeholder="Выбор года"
            className="w-full md:w-14rem"
          />
        </OverlayPanel>
      </div>
      <Divider/>
    </div>

  return (
    <Card header={header}>
      <div>
        <div
          className='text-4xl font-bold text-blue-600'>{isPending ? 'Загрузка' : data?.products_by_year.total_sells.toLocaleString('ru-RU')}</div>
        <div className='text-1xl'>За прошлый
          месяц {isPending ? 'Загрузка' : useGetPastMonthOrderCount(data.products_by_year.monthly_sell_list)}</div>
      </div>
    </Card>
  )
}

export default AnalyticProductsSaleCountCard