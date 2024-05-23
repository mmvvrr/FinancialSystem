"use client"
import {DataTable} from "primereact/datatable"
import {Column} from "primereact/column"
import {Card} from "primereact/card";


const AnalyticCategoryProductTable = function () {


  return (
    <Card title='Список продукции'>
      <DataTable value={[]} stripedRows tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Название"></Column>
        <Column field="category" header="Кол-во продаж"></Column>
        <Column field="category" header="Прибыль"></Column>
        <Column field="quantity" header="Количество на складе"></Column>
      </DataTable>
    </Card>
  )
}

export default AnalyticCategoryProductTable