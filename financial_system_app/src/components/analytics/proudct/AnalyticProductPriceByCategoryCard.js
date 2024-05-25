"use client"

import {Card} from "primereact/card";
import {fetchCategoryListQuery} from "@/hooks/api/analytics/category/fetchCategory";
import {useMemo, useRef, useState} from "react";
import {Button} from "primereact/button";
import {OverlayPanel} from "primereact/overlaypanel";
import {Dropdown} from "primereact/dropdown";
import {Divider} from "primereact/divider";
import AnalyticChartProductPriceByCategory from './AnalyticChartProductPriceByCategory'
import {ruISOFormateDate} from "@/hooks/date";

const  AnalyticProductPriceByCategoryCard = function () {

  const {data, isPending, isSuccess} = fetchCategoryListQuery();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const op = useRef(null);
  const filteredData = useMemo(() => data?.results?.filter(category => category.products.length > 0) || [], [data]);


  if (isPending) return (
    <span>Загрузка...</span>
  )

  console.log(filteredData[0])

  const header =
    <div className='pt-3'>
      <div className='flex flex-row px-3 justify-content-between'>
        <div>
          <div className='text-2xl'>Соотношение цен товаров по категориям</div>
          <div className='text-xs'>На дату {ruISOFormateDate(new Date())}</div>
        </div>
        <div className='text-2xl'></div>
        <Button type="button" text rounded icon="pi pi-ellipsis-h" onClick={(e) => op.current.toggle(e)}/>
        <OverlayPanel ref={op}>
          <label htmlFor="Категория" className="font-bold block mb-2">
            Категория
          </label>
          <Dropdown
            value={selectedCategory ? selectedCategory : filteredData[0].pk}
            onChange={(e) => setSelectedCategory(e.value)}
            options={filteredData}
            optionLabel="name"
            optionValue='pk'
            placeholder="Выбор категории"
            className="w-full md:w-14rem"
          />
        </OverlayPanel>
      </div>
      <Divider/>
    </div>

  return (
    <Card title={header}>
      <AnalyticChartProductPriceByCategory category={selectedCategory ? selectedCategory : filteredData[0].pk}/>

    </Card>
  )
}

export default AnalyticProductPriceByCategoryCard