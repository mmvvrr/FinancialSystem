import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button"
import {fetchCustomersDataQuery} from "@/hooks/api/analytics/customer/fetchCustomersData";
import useSplitNameToFullName from "@/hooks/customer/useSplitNameToFullName";;


const AnalyticCustomerInformationTable = function ({openCustomerDetail}) {

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

  const sidebarBtn = (customer) => {
    return <Button onClick={() => openCustomerDetail(customer.pk)} icon='pi pi-search' rounded text outlined></Button>;
  };


  if (isPending) return (
    <span>Загрузка...</span>
  )

  return (
    <DataTable value={data.result} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
      <Column field="surname" header="ФИО" body={fullName}></Column>
      <Column field="gender" header="Пол" body={gender}></Column>
      <Column field="date_birth" header="Дата рождения"></Column>
      <Column field="phone" header="Телефон"></Column>
      <Column field="email" header="Почта"></Column>
      <Column field="total_quantity_order" header="Кол-во покупок"></Column>
      <Column field="total_amount_order" header="Сумма покупок" body={formattedTotalSumSales}></Column>
      <Column field="sidebarBtn" header="Сумма покупок" body={sidebarBtn}></Column>
    </DataTable>
  )
}

export default AnalyticCustomerInformationTable;