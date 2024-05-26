"use client"

import {fetchCustomerOrdersDetailQuery} from "@/hooks/api/analytics/customer/fetchCustomerOrdersDetail";
import {useState} from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";


const AnalyticCustomerOrdersDetailTable = function ({customerId}) {

  const {data, isPending, isError, error} = fetchCustomerOrdersDetailQuery(customerId)
  const [expandedRows, setExpandedRows] = useState(null);

  if (isPending) return (
    <span>Загрузка...</span>
  )


  const formattedDate = function(order) {
    const date = new Date(order.date);

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}.${month}.${year}`
  }

  const localeStringSumAmount = function(order) {
    return order.total_sum_amount.toLocaleString('ru-RU');
  }

  const localeStringTotalPrice = function(order) {
    return order.total_price.toLocaleString('ru-RU');
  }

  const localeStringUnitPrice = function (order) {
    return order.unit_price.toLocaleString('ru-RU');
  }

  const allowExpansion = (rowData) => {
    return rowData.products.length > 0;
  };

  const rowExpansionTemplate = (data) => {
    return (
      <div className="p-3">
        <DataTable value={data.products}>
          <Column field="name" header="Название"></Column>
          <Column field="quantity" header="Количество"></Column>
          <Column field="unit_price" header="Стоимость единицы" body={localeStringUnitPrice}></Column>
          <Column field="total_price" header="Суммарная стоимость" body={localeStringTotalPrice}></Column>
        </DataTable>
      </div>
    );
  };


  return(
    <DataTable
      value={data.orders}
      expandedRows={expandedRows}
      onRowToggle={(e) => setExpandedRows(e.data)}
      rowExpansionTemplate={rowExpansionTemplate}
      dataKey="pk"
      scrollable
      scrollHeight="90vh"
      virtualScrollerOptions={{ itemSize: 100 }}
      tableStyle={{minWidth: '60rem'}}
    >
      <Column expander={allowExpansion} style={{width: '5rem'}}/>
      <Column field="pk" header="Номер заказа"/>
      <Column field="date" header="Дата заказа" body={formattedDate}/>
      <Column field="total_quantity" header="Количество товаров в заказе"/>
      <Column field='total_sum_amount' header="Сумаррная стоимость заказа" body={localeStringSumAmount}/>
    </DataTable>
  )
}

export default AnalyticCustomerOrdersDetailTable;