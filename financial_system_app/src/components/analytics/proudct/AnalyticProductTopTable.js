"use client"

import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Card} from "primereact/card";
import {Divider} from "primereact/divider";
import {fetchProductTopQuery} from "@/hooks/api/analytics/product/fetchProductTop";

const AnalyticProductTopTable = function () {

  const formateNumberTotalQuantityToLocaleRu = (product) => {
    return product.total_quantity.toLocaleString('ru-RU')
  }

  const formateNumberTotalSumToLocaleRu = function (product) {
    return product.total_sum.toLocaleString('ru-RU')
  }

  const {data, isPending, isError, error} = fetchProductTopQuery({count: 5});


   if (isPending) return (
    <span className='text-3xl'>Загрузка...</span>
  )

  return (
    <Card title="Топ 5 проданной продукции за весь период">
      <Divider/>
      <DataTable value={data} >
        <Column field="product__name" header="Название продукта"></Column>
        <Column field='total_quantity' header="Количество проданных экземпляров" body={formateNumberTotalQuantityToLocaleRu}></Column>
        <Column field='total_sum' header="Общая сумма проданных товаров" body={formateNumberTotalSumToLocaleRu}></Column>
      </DataTable>
    </Card>
  )
}

export default AnalyticProductTopTable



