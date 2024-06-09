"use client"

import {Card} from 'primereact/card'
import {Divider} from 'primereact/divider'
import {fetchEmployeeAllSalesQuery} from "@/hooks/api/analytics/fetchEmployeeAllSales";
import {Chart} from "react-google-charts";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

const AnalyticEmployeeAllSalesTable = ({ category,  is_sum }) => {
  // Передаем category в fetchCustomerPurchasesQuery или используем его другим образом
  const { data, isPending, isError, error } = fetchEmployeeAllSalesQuery();

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <span>Error</span>
  }
  const formatingTotalQuantity = function (employee) {
    return employee.sales[0]?.toLocaleString('ru-RU') || 0 +" руб."
  }
    const formatingFullName = function (employee) {
    return employee.surname+" "+employee.name+" "+employee.patronymic
  }

  let graphData = data["employee_all_sales"].map(employee =>
      [employee.surname+" "+employee.name, employee.sales[0]])

  graphData.unshift(["ФИО", "Зарплата"])
const options = {
    legend: 'none'
  }
  return (
<Card title='Детализация по графику'>
      <DataTable value={data["employee_all_sales"]} stripedRows tableStyle={{ minWidth: '50rem' }} scrollable scrollHeight="70vh">
        <Column field="name" header="ФИО" body={formatingFullName}></Column>
        <Column field="salary" header="Общее число продаж" body={formatingTotalQuantity}></Column>
      </DataTable>
    </Card>
  );
}

export default AnalyticEmployeeAllSalesTable