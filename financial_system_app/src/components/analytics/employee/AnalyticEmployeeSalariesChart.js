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
      [employee.surname+" "+employee.name, employee.salary*24])

  const options = {
    legend: 'none'
  }

  graphData.unshift(["ФИО", "Зарплата"])

  return (
      <Card title='График зарплаты сотрудников (в месяц)'>
    <div className="text-center">
      <Chart
        chartType="BarChart"
        data={graphData}
        height='900px'
        options={options}
      />
    </div>
      </Card>
  );
}

export default AnalyticEmployeeSalariesChart