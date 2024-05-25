import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {fetchCustomersDataQuery} from "@/hooks/api/analytics/customer/fetchCustomersData";
import useSplitNameToFullName from "@/hooks/customer/useSplitNameToFullName";
import {func} from "prop-types";


const AnalyticCustomerInformationTable = function () {

  const {data, isPending, isError, error} = fetchCustomersDataQuery();


  const fullName = function (customer) {
    return useSplitNameToFullName(
      {surname: customer.surname, name: customer.name, patronymic: customer.patronymic}
    )
  }

  const gender = function (customer) {
    if (customer.gender) {
      return "Муж."
    } else {
      return "Жен."
    }
  }

  const formattedTotalSumSales = function (customer) {
    return customer?.total_amount_order?.toLocaleString('ru-RU') || "empty"
  }


  if (isPending) return (
    <span>Загрузка...</span>
  )

  return (
    <DataTable value={data} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
      <Column field="surname" header="ФИО" body={fullName}></Column>
      <Column field="gender" header="Пол" body={gender}></Column>
      <Column field="date_birth" header="Дата рождения"></Column>
      <Column field="phone" header="Телефон"></Column>
      <Column field="email" header="Почта"></Column>
      <Column field="total_quantity_order" header="Кол-во покупок"></Column>
      <Column field="total_amount_order" header="Сумма покупок" body={formattedTotalSumSales}></Column>
    </DataTable>
  )
}

export default AnalyticCustomerInformationTable;