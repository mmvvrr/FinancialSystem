"use client"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

const AnalyticSupplyDetailTable = function () {
  return (
    <DataTable value={[]} stripedRows tableStyle={{minWidth: '50rem'}}>
      <Column field="supply_id" header="Название продукта"></Column>
      <Column field="storage_name" header="Поставщик"></Column>
      <Column field="delivery_date" header="Количество"></Column>
      <Column field="total_cost" header="Единица продукции"></Column>
      <Column field="sidebarBtn" header="Общая стоимость"></Column>
    </DataTable>
  )
}

export default AnalyticSupplyDetailTable;