"use client"

import {fetchCategoryDetailQuery} from "@//hooks/api/analytics/category/fetchCategory"
import {AnalyticOrderCountCard} from "@/components/analytics/order";
import {AnalyticProductsSaleCountCard} from "@/components/analytics/proudct";
import {AnalyticCustomerCountCard} from "@/components/analytics/customer";
import {AnalyticSupplyCountCard} from "@/components/analytics/supply";
import {
  AnalyticCategoryProductTable,
  AnalyticCategoryProductCountSaleChart,
  AnalyticCategoryCountOrderCard,
  AnalyticCategoryProductCountSale,
} from "@/components/analytics/category/"


export default function Page({ params }) {

  const {data, isFetching, isLoading, error, isError, isPending} = fetchCategoryDetailQuery(params.id)

  const years = [
    {name: "2023", code: "2023"},
    {name: "2024", code: "2024"},
  ]

  if (isPending) return (
    <span>Загрузка...</span>
  )

  return (
    <div className="px-5 py-4 w-full">

      <div className='mt-5 mb-8'>
        <div className='text-6xl'>
          Общая информация о "{data.name}"
        </div>
        <div>

        </div>
      </div>
      <div className="grid">
        <div className='col-3'>
          <div className='col-12'>
            <AnalyticCategoryCountOrderCard category_id={params.id}/>
          </div>
          <div className='col-12'>
            <AnalyticCategoryProductCountSale category_id={params.id}/>
          </div>
        </div>
        <div className='col-3'>
          <div className='col-12'>
            <AnalyticCustomerCountCard/>
          </div>
          <div className='col-12'>
            <AnalyticSupplyCountCard years={years}/>
          </div>
        </div>
        <div className='col-6'>
          <AnalyticCategoryProductTable category_id={params.id}/>
        </div>

        <div className='col-7'>
          <AnalyticCategoryProductCountSaleChart/>
        </div>

        <div className='col-5'>

        </div>

      </div>
    </div>
  )
}