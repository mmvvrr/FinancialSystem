"use client"

import {Card} from 'primereact/card'
import {Divider} from 'primereact/divider'
import {fetchEmployeeSalariesQuery} from "@/hooks/api/analytics/fetchEmployeeSalries";
import {Chart} from "react-google-charts";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

const AnalyticEmployeeSalariesChart = ({ category,  is_sum }) => {
  // Передаем category в fetchCustomerPurchasesQuery или используем его другим образом
  const { data, isPending, isError, error } = fetchEmployeeSalariesQuery();

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <span>Error</span>
  }
    const formatingTotalQuantity = function (employee) {
    return (employee.salary*24).toLocaleString('ru-RU')+" руб."
  }
    const formatingFullName = function (employee) {
    return employee.surname+" "+employee.name+" "+employee.patronymic
  }

  const formatingTotalAmount = function (customer) {
    return (customer.total_sum*24).toLocaleString('ru-RU')+" руб."
  }
  let graphData = data["employee_salaries"].map(employee =>
      [employee.surname+" "+employee.name+" "+employee.patronymic, employee.salary])

  graphData.unshift(["ФИО", "Зарплата"])

  return (
    <Card title='Детализация по графику'>
      <DataTable value={data["employee_salaries"]} stripedRows tableStyle={{ minWidth: '50rem' }} scrollable scrollHeight="40vh">
        <Column field="name" header="ФИО" style={{width: '50%'}} body={formatingFullName}></Column>
        <Column field="salary" header="Зарплата в месяц" style={{width: '25%'}} body={formatingTotalQuantity}></Column>
      </DataTable>
    </Card>
  )
}

export default AnalyticEmployeeSalariesChart