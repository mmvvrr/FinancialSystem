"use client"

import AnalyticChartProductPriceByCategory from "@/components/analytics/proudct/AnalyticChartProductPriceByCategory";
import {
  AnalyticCustomerCountCard
} from "@/components/analytics/customer"

import {
  AnalyticProductsSaleCountCard,
  AnalyticProductTopTable
} from "@/components/analytics/proudct"

import {
  AnalyticOrderCountCard
} from "@/components/analytics/order"

import {
  AnalyticSupplyCountCard
} from "@/components/analytics/supply"

import {Card} from "primereact/card";
import AnalyticCustomerPurchasesCard from "@/components/analytics/customer/AnalyticCustomerPurchasesCard";
import AnaliticCustomerPurchasesTable from "@/components/analytics/customer/AnaliticCustomerPurchasesTable";
import {AnalyticCategoryProductTable} from "@/components/analytics/category";
import {Divider} from "primereact/divider";


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

          <div className='col-7'>
            <AnalyticCustomerPurchasesCard category={6} is_sum={'1'}/>
          </div>
          <div className='col-5'>
            <AnaliticCustomerPurchasesTable category={6}/>
          </div>
          <br/>
          <div className='col-7'>
            <AnalyticCustomerPurchasesCard category={4} is_sum={'0'}/>
          </div>
          <div className='col-5'>
            <AnaliticCustomerPurchasesTable category={4}/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home
