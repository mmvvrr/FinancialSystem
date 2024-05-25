"use client"

import AnalyticCustomerPurchasesCard from "@/components/analytics/customer/AnalyticCustomerPurchasesCard";
import AnaliticCustomerPurchasesTable from "@/components/analytics/customer/AnaliticCustomerPurchasesTable";
import {
  AnalyticCustomerInformationTable
} from "@/components/analytics/customer"


  const years = [
      { name: '2023', code: '2023' },
      { name: '2024', code: '2024' },
  ];

const Home = function() {

  return (
    <div className="px-5 py-4 w-full">
      <div>
        <div className='text-6xl'>
          Аналитика по покупателям
        </div>
        <div className="grid">

          {/*<div className='col-7'>*/}
          {/*  <AnalyticCustomerPurchasesCard category={6} is_sum={'1'}/>*/}
          {/*</div>*/}
          {/*<div className='col-5'>*/}
          {/*  <AnaliticCustomerPurchasesTable category={6}/>*/}
          {/*</div>*/}
          <div className='col-7'>
            <AnalyticCustomerPurchasesCard category={4} is_sum={'0'}/>
          </div>
          <div className='col-5'>
            <AnaliticCustomerPurchasesTable category={4}/>
          </div>
          <div className='col-12'>
            <AnalyticCustomerInformationTable/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home
