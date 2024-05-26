"use client"

import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {Card} from "primereact/card";
import {fetchSupplyDataListQuery} from "@/hooks/api/analytics/supply/fetchSupplyDataList";
import {useFormattedDateRu} from "@/hooks/date";
import {Button} from "primereact/button";


const AnalyticSupplyDataTable = function (openSupplyDetail) {

  const {data, isPending, isError, error} = fetchSupplyDataListQuery();

  const formatingTotalCoast = function (customer) {
    return customer.total_cost.toLocaleString('ru-RU')
  }

  const formatingDate = function (supply) {
    return useFormattedDateRu(supply.delivery_date);
  }

  if (isPending) {
    return (
      <span>Загрузка...</span>
    )
  }

  const sidebarBtn = (supply) => {
    return <Button onClick={() => openSupplyDetail(supply)} icon='pi pi-search' rounded text outlined></Button>;
  };

  return (
    <Card title='Список поставок'>
      <DataTable value={data} stripedRows tableStyle={{minWidth: '50rem'}} scrollable scrollHeight='60vh'>
        <Column field="supply_id" header="Номер поставки" style={{width: '15%'}}></Column>
        <Column field="delivery_date" header="Дата" style={{width: '15%'}} body={formatingDate}></Column>
        <Column field="storage_name" header="Склад" style={{width: '45%'}}></Column>
        <Column field="total_cost" header="Общая стоимость поставки руб." style={{width: '15%'}} body={formatingTotalCoast}></Column>
        <Column field="sidebarBtn" header="Действие" style={{width: '10%'}} body={sidebarBtn}></Column>
      </DataTable>
    </Card>
  )
}

export default AnalyticSupplyDataTable;