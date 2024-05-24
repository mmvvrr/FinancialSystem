"use client"
import {Chart} from "react-google-charts"
import {fetchProductPriceHistoryQuery} from "@/hooks/api/analytics/product/fetchProductPriceHistory";
import {useState} from "react";
import {Card} from 'primereact/card'

const AnalyticCategoryProductPriceHistoryChart = function () {

  const {data, isPending, isError} = fetchProductPriceHistoryQuery(3)


  if (isPending) {
    return (
      <span>Загрузка...</span>
    )
  }


  let dataGraph = data.price.map(price => {
    return [price.created_at, price.price]
  })

  dataGraph.unshift(["Дата", "Стоимость в руб."])

  const firstValue = dataGraph[1][1]

  console.log(firstValue)


  const options = {
    curveType: "function",
    legend: "none",
    hAxis: { title: "Дата" },
    vAxis: { title: "Стоимость в руб." },
  };


  return (
    <Card title='История изменения цен'>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={dataGraph}
        options={options}
      />
    </Card>
  )
}

export default AnalyticCategoryProductPriceHistoryChart;