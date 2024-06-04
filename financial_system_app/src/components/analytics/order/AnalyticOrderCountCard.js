"use client"

import {Card} from 'primereact/card'
import {Dropdown} from 'primereact/dropdown'
import {Divider} from 'primereact/divider'
import {Button} from 'primereact/button'
import {useRef, useState} from "react";
import {OverlayPanel} from "primereact/overlaypanel";
import {fetchOrderCountByYearQuery} from "@/hooks/api/analytics/fetchOrderCountByYear";
import useGetPastMonthOrderCount from "@/hooks/analytics/useGetPastMonthOrderCount";

const AnalyticOrderCountCard = function (props) {

  const [selectedYear, setSelectedYear] = useState(props.years[props.years.length - 1]);

  const {data, isPending, isError, error} =
    fetchOrderCountByYearQuery(selectedYear.code)


  const op = useRef(null);

  const header =
    <div className='pt-3'>
      <div className='flex flex-row px-3 justify-content-between'>
        <div>
          <div className='text-2xl'>Количество заказов</div>
          <div className='text-xs'>Завершенных</div>
        </div>
        <div className='text-2xl'></div>
        <Button type="button" text rounded icon="pi pi-ellipsis-h" onClick={(e) => op.current.toggle(e)}/>
        <OverlayPanel ref={op}>
          <label htmlFor="Год" className="font-bold block mb-2">
            Год
          </label>
          <Dropdown
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.value)} options={props.years} optionLabel="name"
            placeholder="Выбор года" className="w-full md:w-14rem"
          />
        </OverlayPanel>
      </div>
      <Divider/>
    </div>

  return (
    <Card header={header}>
      <div>
        <div className='text-4xl font-bold text-blue-600'>{isPending ? 'Загрузка': data?.order_count.total_order.toLocaleString('ru-RU')}</div>
        <div className='text-1xl'>За прошлый месяц {isPending ? 'Загрузка': useGetPastMonthOrderCount(data.order_count.monthly_orders_list)}</div>
      </div>
    </Card>
  )
}

export default AnalyticOrderCountCard