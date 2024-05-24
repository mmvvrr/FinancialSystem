"use client"

import {Card} from 'primereact/card'
import {Divider} from 'primereact/divider'
import {fetchCustomerPurchasesQuery} from "@/hooks/api/analytics/fetchCustomerPurchase";
import {Chart} from "react-google-charts";

const AnalyticCustomerPurchasesCard = ({ category,  is_sum }) => {
  // Передаем category в fetchCustomerPurchasesQuery или используем его другим образом
  const { data, isPending, isError, error } = fetchCustomerPurchasesQuery(category, is_sum);

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <span>Error</span>
  }

  let graphData = data["customers_purchases"].map(customer =>
      [customer.order__customer__surname+" "+customer.order__customer__name+" "+customer.order__customer__patronymic, customer.total_sum])

  graphData.unshift(["Фамилия", "Общее число за всё время"])

  return (
      <Card title='График покупателей'>
    <div className="text-center">
      <Chart
        chartType="ColumnChart"
        data={graphData}
        legendToggle
      />
    </div>
      </Card>
  );
}

export default AnalyticCustomerPurchasesCard