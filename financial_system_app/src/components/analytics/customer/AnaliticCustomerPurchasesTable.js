"use client"

import {Card} from 'primereact/card'
import {Divider} from 'primereact/divider'
import {fetchCustomerPurchasesQuery} from "@/hooks/api/analytics/fetchCustomerPurchase";
import {Chart} from "react-google-charts";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

const AnalyticCustomerPurchasesCard = ({ category,  is_sum }) => {
  // Передаем category в fetchCustomerPurchasesQuery или используем его другим образом
  const { data, isPending, isError, error } = fetchCustomerPurchasesQuery(category, is_sum);

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <span>Error</span>
  }

    const formatingTotalQuantity = function (customer) {
    return customer.total_quantity.toLocaleString('ru-RU')
  }
    const formatingFullName = function (customer) {
    return customer.order__customer__surname+" "+customer.order__customer__name+" "+customer.order__customer__patronymic
  }

  const formatingTotalAmount = function (customer) {
    return customer.total_sum.toLocaleString('ru-RU')+" руб."
  }

  let graphData = data["customers_purchases"].map(customer =>
      [customer.order__customer__surname+" "+customer.order__customer__name+" "+customer.order__customer__patronymic, customer.total_sum])

  graphData.unshift(["Фамилия", "Общее число за всё время"])

  return (
    <Card title='Детализация по графику'>
      <DataTable value={data["customers_purchases"]} stripedRows tableStyle={{ minWidth: '50rem' }} scrollable scrollHeight="40vh">
        <Column field="name" header="ФИО" style={{width: '50%'}} body={formatingFullName}></Column>
        <Column field="total_quantity" header="Приобретено товаров" style={{width: '25%'}} body={formatingTotalQuantity}></Column>
        <Column field="total_amount" header="Финансовый приход" style={{width: '25%'}} body={formatingTotalAmount}></Column>
      </DataTable>
    </Card>
  )
}

export default AnalyticCustomerPurchasesCard