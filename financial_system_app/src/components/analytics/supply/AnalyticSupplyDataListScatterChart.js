import {Card} from "primereact/card";
import {Chart} from "react-google-charts";
import {fetchSupplyDataListQuery} from "@/hooks/api/analytics/supply/fetchSupplyDataList";
import formattedDate from "@/hooks/date/useFormattedDateRu";

const AnalyticSupplyDataListScatterChart = function () {

  const {data, isPending, isError, error} = fetchSupplyDataListQuery()

  if (isPending) {
    return (
      <span>Загрузка...</span>
    )
  }

  const dataGraph = data.result.map(supply => [formattedDate(supply.delivery_date), supply.total_cost])

  dataGraph.unshift(["Дата", "Стоимость"])


    const options = {
    legend: 'none',
    axes: {
      x: {
        0: {side: 'top'}
      }
    }
  };

  return(
    <Card title='Сумма доставок'>
      <Chart
        chartType="Scatter"
        data={dataGraph}
        options={options}
        height='60vh'
      />
    </Card>
  )
}

export default AnalyticSupplyDataListScatterChart;