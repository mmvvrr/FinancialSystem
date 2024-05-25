"use client"
import {Chart} from "react-google-charts"
import {fetchCategoryProductionSalesDataQuery} from "@/hooks/api/analytics/category/fetchCategoryProductDataSales";

const AnalyticCategoryProductDataSales = function (props) {

  const {data, isPending, isError} = fetchCategoryProductionSalesDataQuery(
    props.productId,
    {toDate: props.toDate, fromDate: props.fromDate}
  )


  if (isPending) {
    return (
      <div>Загрузка...</div>
    )
  }

  if (isError) {
    return (
      <div>Ошибка</div>
    )
  }

  let dataGraph = data.product_data_sales.map(price => {
    return [price.formatted_date, price.total_sales]
  })

  dataGraph.unshift(["Дата", "Сумма в руб."])

  const options = {
    legend: "none",
    hAxis: { title: "Дата" },
    vAxis: { title: "Стоимость в руб." },
    trendlines: { 0: {} },
  };


  return (
    <Chart
        chartType={props.typeChart}
        width="100%"
        height="400px"
        data={dataGraph}
        options={options}
    />
  )
}

export default AnalyticCategoryProductDataSales;