"use client"
import { Chart } from "react-google-charts";
import {fetchGetProductPriceByCategoryQuery} from "@/hooks/api/analytics/useGetProductPriceByCategory";
import {ProgressSpinner} from "primereact/progressspinner";
import { Chip } from 'primereact/chip';

const AnalyticChartProductPriceByCategory = function(props) {

  const { data, isLoading, isPending, isError } = fetchGetProductPriceByCategoryQuery(6);

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <span>Error</span>
  }

  let graphData = data.map(product => [product.name, product.price.value])

  graphData.unshift(["Название", "Цена"])

  return (
    <div className="text-center">
      <Chart
        chartType="PieChart"
        data={graphData}
        legendToggle
      />
    </div>
  );
}

export default AnalyticChartProductPriceByCategory
