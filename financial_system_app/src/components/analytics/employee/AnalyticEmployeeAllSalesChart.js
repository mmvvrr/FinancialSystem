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
      [employee.surname+" "+employee.name+" "+employee.patronymic, employee.sales])

  graphData.unshift(["ФИО", "Зарплата"])

  return (
      <Card title='График зарплаты сотрудников (в месяц)'>
    <div className="text-center">
      <Chart
        chartType="Scatter"
        data={graphData}
        legendToggle
      />
    </div>
      </Card>
  );
}

export default AnalyticEmployeeAllSalesChart