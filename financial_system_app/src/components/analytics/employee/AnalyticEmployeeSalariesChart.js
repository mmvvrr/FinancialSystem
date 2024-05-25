"use client"

import {Card} from 'primereact/card'
import {Divider} from 'primereact/divider'
import {fetchEmployeeSalariesQuery} from "@/hooks/api/analytics/fetchEmployeeSalries";
import {Chart} from "react-google-charts";

const AnalyticEmployeeSalariesChart = ({ category,  is_sum }) => {
  // Передаем category в fetchCustomerPurchasesQuery или используем его другим образом
  const { data, isPending, isError, error } = fetchEmployeeSalariesQuery();

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <span>Error</span>
  }

  let graphData = data["employee_salaries"].map(employee =>
      [employee.surname+" "+employee.name+" "+employee.patronymic, employee.salary])

  graphData.unshift(["Фамилия", "Общее число за всё время"])

  return (
      <Card title='График покупателей'>
    <div className="text-center">
      <Chart
        chartType="ScatterChart"
        data={graphData}
        legendToggle
        height='400px'
      />
    </div>
      </Card>
  );
}

export default AnalyticEmployeeSalariesChart