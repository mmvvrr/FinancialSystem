"use client"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {fetchSupplyDataDetailQuery} from "@/hooks/api/analytics/supply/fetchSupplyDataDetail";

const AnalyticSupplyDetailTable = function ({supplyId}) {

  const {data, isPending, isError, error} = fetchSupplyDataDetailQuery(supplyId)

    const formatingTotalPrice = function (customer) {
    return customer.total_price.toLocaleString('ru-RU')
  }

  if (isPending) return (
    <span>Загрузка...</span>
  )

  return (
    <DataTable value={data.result} stripedRows tableStyle={{minWidth: '50rem'}}>
      <Column field="product_pk" header="Код продукта"></Column>
      <Column field="product_name" header="Название продукта"></Column>
      <Column field="provider_name" header="Поставщик"></Column>
      <Column field="quantity" header="Количество"></Column>
      <Column field="unit_price" header="Стоимость единицы продукции"></Column>
      <Column field="total_price" header="Общая стоимость" body={formatingTotalPrice}></Column>
    </DataTable>
  )
}

export default AnalyticSupplyDetailTable;