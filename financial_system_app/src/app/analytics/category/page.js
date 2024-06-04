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


  const years = [
      { name: '2023', code: '2023' },
      { name: '2024', code: '2024' },
  ];

const Home = function() {

  return (
    <div className="px-5 py-4 w-full">

      <div className='mt-5 mb-8'>
        <div className='text-6xl'>
          Общая информация о категориях
        </div>
        <div>

        </div>
      </div>
      <div className="grid">
        <div className='col-3'>
          <AnalyticOrderCountCard years={years}/>
        </div>
        <div className='col-3'>
          <AnalyticProductsSaleCountCard years={years}/>
        </div>
        <div className='col-3'>
          <AnalyticCustomerCountCard/>
        </div>
        <div className='col-3'>
          <AnalyticSupplyCountCard years={years}/>
        </div>
      </div>
    </div>
  );
}

export default Home
