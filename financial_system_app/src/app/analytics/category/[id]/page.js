"use client"

import {fetchCategoryDetailQuery} from "@/hooks/api/analytics/category/fetchCategory"
import {
  AnalyticCategoryProductTable,
  AnalyticCategoryCountOrderCard,
  AnalyticCategoryProductCountSale,
  AnalyticCategorySupplyCount,
  AnalyticCategoryCustomerCountCard,
  AnalyticCategoryProductPriceHistoryCard,
  AnalyticCategoryProductDataSalesCard,
} from "@/components/analytics/category"


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
            <AnalyticCategoryCustomerCountCard category_id={params.id}/>
          </div>
          <div className='col-12'>
            <AnalyticCategorySupplyCount category_id={params.id}/>
          </div>
        </div>
        <div className='col-6'>
          <AnalyticCategoryProductTable category_id={params.id}/>
        </div>

        <div className='col-6'>
          <AnalyticCategoryProductPriceHistoryCard categoryId={params.id}/>
        </div>

        <div className='col-6'>
          <AnalyticCategoryProductDataSalesCard categoryId={params.id}/>
        </div>

      </div>
    </div>
  )
}