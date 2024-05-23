"use client"

import {Card} from 'primereact/card'
import {Divider} from 'primereact/divider'
import {fetchCustomerPurchasesQuery} from "@/hooks/api/analytics/fetchCustomerPurchase";
import {Chart} from "react-google-charts";

const AnalyticCustomerPurchases = function () {

    const {data, isPending, isError, error} =
    fetchCustomerPurchasesQuery(6)

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <span>Error</span>
  }

  let graphData = data.map(customer => [customer.order__customer__surname, customer.total_sum])

  graphData.unshift(["Фамилия", "Сколько напокупал говна"])

  return (
    <div className="text-center">
      <Chart
        chartType="Histogram"
        data={graphData}
        legendToggle
      />
    </div>
  );
}

export default AnalyticCustomerPurchases