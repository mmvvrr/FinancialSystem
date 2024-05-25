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


  const years = [
      { name: '2023', code: '2023' },
      { name: '2024', code: '2024' },
  ];

const Home = function() {

  return (
    <div className='w-full px-5 py-4'>
      <div className='text-6xl'>
        Аналитика по покупателям
      </div>
      <div className='grid'>
        <div className='col-12'>
          <div className='text-2xl'>
            Покупатели с самой большой суммой покупок
          </div>
          <AnalyticCustomerPurchasesCard category={4} is_sum={'1'}/>
        </div>
        <div className='col-12'>
          <div className='text-2xl'>
            Покупатели с самой большой суммой покупок
          </div>
          <AnalyticCustomerPurchasesCard category={4} is_sum={'0'}/>
        </div>
      </div>

    </div>

  );
}

export default Home
