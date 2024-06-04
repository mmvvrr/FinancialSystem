"use client"
import {Chart} from "react-google-charts"
import {fetchProductPriceHistoryQuery} from "@/hooks/api/analytics/product/fetchProductPriceHistory";
import {Card} from 'primereact/card'
import {Calendar} from 'primereact/calendar'
import {Dropdown} from "primereact/dropdown";

const AnalyticCategoryProductPriceHistoryChart = function (props) {

  const {data, isPending, isError} = fetchProductPriceHistoryQuery(
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

  let dataGraph = data.product_price_history.price.map(price => {
    return [price.created_at, price.price]
  })

  dataGraph.unshift(["Дата", "Стоимость в руб."])

  const options = {
    curveType: "function",
    legend: "none",
    hAxis: { title: "Дата" },
    vAxis: { title: "Стоимость в руб." },
  };


  return (
    <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={dataGraph}
        options={options}
    />
  )
}

export default AnalyticCategoryProductPriceHistoryChart;