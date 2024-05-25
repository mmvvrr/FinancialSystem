import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";


const AnalyticCustomerInformationTable = function () {
  return (
    <DataTable value={[]} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
      <Column field="ФИО" header="ФИО"></Column>
      <Column field="Пол" header="Пол"></Column>
      <Column field="Дата рождения" header="Дата рождения"></Column>
      <Column field="Телефон" header="Телефон"></Column>
      <Column field="Почта" header="Почта"></Column>
      <Column field="Кол-во заказов" header="Кол-во покупок"></Column>
      <Column field="Сумма заказов" header="Сумма покупок"></Column>
    </DataTable>
  )
}

export default AnalyticCustomerInformationTable;