import {fetchSupplyDataListQuery} from "@/hooks/api/analytics/supply/fetchSupplyDataList";
import {Chart} from "react-google-charts";
import {Card} from "primereact/card";
import formattedDate from "@/hooks/date/useFormattedDateRu";

const AnalyticSupplyDataListChart = function () {

  const {data, isPending, isError, error} = fetchSupplyDataListQuery()

  if (isPending) {
    return (
      <span>Загрузка...</span>
    )
  }

  const dataGraph = data.map(supply => [formattedDate(supply.delivery_date) ,supply.total_cost])

  dataGraph.unshift(["Дата", "Сумма в руб."])

  const options = {
    legend: 'none',
    color: ['green'],
    axes: {
      x: {
        0: {side: 'top'}
      }
    }
  };

  return(
    <Card title='Динамика суммы поставок по дням'>
      <Chart
        chartType="SteppedAreaChart"
        data={dataGraph}
        options={options}
        height='60vh'
      />
    </Card>
  )
}

export default AnalyticSupplyDataListChart;