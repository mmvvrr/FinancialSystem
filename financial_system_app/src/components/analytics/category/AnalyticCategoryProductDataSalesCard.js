"use client"

import {useState} from "react";
import {Card} from "primereact/card";
import {Calendar} from "primereact/calendar";
import {Dropdown} from "primereact/dropdown";
import {fetchCategoryProductInformationQuery} from "@/hooks/api/analytics/category/fetchCategoryProductInformation";
import AnalyticCategoryProductDataSalesChart
  from "@/components/analytics/category/AnalyticCategoryProductDataSalesChart";


const AnalyticCategoryProductDataSalesCard = function (props) {
  const {data, isPending, isError, isSuccess} = fetchCategoryProductInformationQuery(props.categoryId)
  const [toDate, setToDate] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [typeChart, setTypeChart] = useState("LineChart");

  const chartTypes = [
    {name: "Линейный график", code: "LineChart"},
    {name: "Точечная диаграмма", code: "ScatterChart"},
  ]

  if(isPending) return (
    <span>Загрузка...</span>
  )

  return (
     <Card title='Динамика продаж'>
       <div className="card flex flex-column md:flex-row gap-3">
         <div className="flex-1">
           <label htmlFor="buttondisplay" className="font-bold block mb-2">
             От
           </label>
           <Calendar
             id="buttondisplay"
             value={toDate} onChange={(e) => setToDate(e.value)}
             showIcon
             placeholder="Выберите дату"
           />
         </div>

         <div className="flex-1">
           <label htmlFor="buttondisplay" className="font-bold block mb-2">
             До
           </label>
           <Calendar
             id="buttondisplay"
             value={fromDate} onChange={(e) => setFromDate(e.value)}
             showIcon
             placeholder="Выберите дату"
           />
         </div>

         <div className="flex-1">
           <label htmlFor="buttondisplay" className="font-bold block mb-2">
             Тип продукции
           </label>
           <Dropdown
             value={selectedProduct ? selectedProduct : data?.category_product_information[0]}
             onChange={(e) => setSelectedProduct(e.value)}
             options={data?.category_product_information || []}
             optionLabel="name"
             placeholder="Выберите продукт"
             className="w-full md:w-14rem"
           />
         </div>
         <div className="flex-1">
           <label htmlFor="buttondisplay" className="font-bold block mb-2">
             Тип Графика
           </label>
           <Dropdown
             value={typeChart}
             onChange={(e) => setTypeChart(e.value)}
             options={chartTypes}
             optionLabel="name"
             optionValue="code"
             placeholder="Выберите тип графика"
             className="w-full md:w-14rem"
           />
         </div>
       </div>
       <AnalyticCategoryProductDataSalesChart
         productId={selectedProduct ? selectedProduct.pk : data?.category_product_information[0].pk}
         toDate={toDate?.toISOString().slice(0, 10)}
         fromDate={fromDate?.toISOString().slice(0, 10)}
         typeChart={typeChart}
       />
     </Card>
  )
}

export default AnalyticCategoryProductDataSalesCard;