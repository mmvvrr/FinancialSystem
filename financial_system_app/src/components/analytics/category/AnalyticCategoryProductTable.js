"use client"
import {DataTable} from "primereact/datatable"
import {Column} from "primereact/column"
import {Card} from "primereact/card";
import {fetchCategoryProductInformationQuery} from "@/hooks/api/analytics/category/fetchCategoryProductInformation";

const AnalyticCategoryProductTable = function (props) {


  const {data, isPending, isError, error} =
    fetchCategoryProductInformationQuery(props.category_id)

  const formatingTotalQuantity = function (product) {
    return product.total_quantity.toLocaleString('ru-RU')
  }

  const formatingTotalAmount = function (product) {
    return product.total_amount.toLocaleString('ru-RU')
  }


  if (isPending) return (
    <span>Загрузка...</span>
  )

  return (
    <Card title='Список продукции'>
      <DataTable value={data["category_product_information"]} stripedRows tableStyle={{ minWidth: '50rem' }} scrollable scrollHeight="40vh">
        <Column field="name" header="Название" style={{width: '50%'}}></Column>
        <Column field="total_quantity" header="Кол-во продаж" style={{width: '25%'}} body={formatingTotalQuantity}></Column>
        <Column field="total_amount" header="Прибыль" style={{width: '25%'}} body={formatingTotalAmount}></Column>
      </DataTable>
    </Card>
  )
}

export default AnalyticCategoryProductTable