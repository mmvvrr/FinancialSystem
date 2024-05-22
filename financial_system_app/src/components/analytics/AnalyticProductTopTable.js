"use client"

import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Card} from "primereact/card";
import {fetchProductTopQuery} from "@/hooks/api/analytics/product/fetchProductTop";

const AnalyticProductTopTable = function () {

  const {data, isPending, isError, error} = fetchProductTopQuery({count: 5});


   if (isPending) return (
    <span className='text-3xl'>Загрузка...</span>
  )

  return (
    <Card title="Топ 5 продукции">
      <DataTable value={data} >
        <Column field="product__name" header="Название"></Column>
        <Column field="total_quantity" header="Кол-во"></Column>
        <Column field="total_sum" header="Сумма денег"></Column>
      </DataTable>
    </Card>
  )
}

export default AnalyticProductTopTable



