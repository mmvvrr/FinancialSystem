"use client"

import AnalyticCustomerPurchasesCard from "@/components/analytics/customer/AnalyticCustomerPurchasesCard";
import AnaliticCustomerPurchasesTable from "@/components/analytics/customer/AnaliticCustomerPurchasesTable";
import {
  AnalyticCustomerInformationTable,
  AnalyticCustomerDetailSidebar,
} from "@/components/analytics/customer"
import {useState} from "react";

const Home = function() {

  const [visible, setVisible] = useState(false);
  const [customerId, setCustomerId] = useState(null);

  const openCustomerDetail = function (customer) {
    setCustomerId(customer);
    setVisible(true);
  }

  return (
    <div className="px-5 py-4 w-full">
      <div>
        <div className='text-6xl'>
          Аналитика по покупателям
        </div>
        <div className="grid">
          <div className='col-7'>
            <AnalyticCustomerPurchasesCard category={4} is_sum={'0'}/>
          </div>
          <div className='col-5'>
            <AnaliticCustomerPurchasesTable category={4}/>
          </div>
          <div className='col-12'>
            <AnalyticCustomerInformationTable openCustomerDetail={openCustomerDetail}/>
          </div>
        </div>
      </div>
      <AnalyticCustomerDetailSidebar visible={visible} setVisible={setVisible} customerId={customerId}/>
    </div>

  );
}

export default Home
