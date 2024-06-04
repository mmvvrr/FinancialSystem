"use client"
import { Chart } from "react-google-charts";
import {fetchGetProductPriceByCategoryQuery} from "@/hooks/api/analytics/useGetProductPriceByCategory";

const AnalyticChartProductPriceByCategory = function(props) {

  const { data, isLoading, isPending, isError } = fetchGetProductPriceByCategoryQuery(props.category);

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <span>Error</span>
  }

  let graphData = data.products.map(product => [product.name, product.price.value])

  graphData.unshift(["Название", "Цена"])

    const options = {
      legend: "bottom",
      hAxis: { title: "Дата" },
      vAxis: { title: "Стоимость в руб." },
    };

  return (
    <div className="text-center">
      <Chart
        chartType="PieChart"
        data={graphData}
        legendToggle
        height='300px'
        options={options}
      />
    </div>
  );
}

export default AnalyticChartProductPriceByCategory
