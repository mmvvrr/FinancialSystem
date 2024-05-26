import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {Card} from "primereact/card";


const AnalyticSupplyDataTable = function () {


  return (
    <Card title='Список поставок'>
      <DataTable value={[]} stripedRows tableStyle={{minWidth: '50rem'}}>
        <Column field="code" header="Номер поставки" style={{width: '15%'}}></Column>
        <Column field="date" header="Дата" style={{width: '15%'}}></Column>
        <Column field="storage" header="Склад" style={{width: '50%'}}></Column>
        <Column field="total_amount" header="Общая стоимость поставки" style={{width: '20%'}}></Column>
      </DataTable>
    </Card>
  )
}

export default AnalyticSupplyDataTable;