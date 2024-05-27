"use client"

import {Card} from 'primereact/card'
import {Divider} from 'primereact/divider'
import {fetchEmployeeAllSalesQuery} from "@/hooks/api/analytics/fetchEmployeeAllSales";
import {Chart} from "react-google-charts";

const AnalyticEmployeeAllSalesChart = ({ category,  is_sum }) => {
  // Передаем category в fetchCustomerPurchasesQuery или используем его другим образом
  const { data, isPending, isError, error } = fetchEmployeeAllSalesQuery();

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <span>Error</span>
  }

  let graphData = data["employee_all_sales"].map(employee =>
      [employee.surname+" "+employee.name, employee.sales[0]])

  graphData.unshift(["ФИО", "Зарплата"])
const options = {
    legend: 'none',
    colors: ['green']
  }
  return (
      <Card title='График общих продаж сотрудников'>
    <div className="text-center">
      <Chart
        chartType="BarChart"
        data={graphData}
        height='900px'
        legendToggle
        options={options}
      />
    </div>
      </Card>
  );
}

export default AnalyticEmployeeAllSalesChart