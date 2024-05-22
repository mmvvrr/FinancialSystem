"use client"

import {Card} from 'primereact/card'
import {Divider} from 'primereact/divider'
import {fetchCustomerCountQuery} from "@/hooks/api/analytics/fetchCustomerCount";

const AnalyticProductsSaleCountCard = function () {

    const {data, isPending, isError, error} =
    fetchCustomerCountQuery()

  const header =
    <div className='pt-3'>
      <div className='flex flex-row px-3 justify-content-between'>
        <div>
          <div className='text-2xl'>Количество покупателей</div>
          <div className='text-xs'>Зарегистрированных</div>
        </div>
      </div>
      <Divider/>
    </div>

  return (
    <Card header={header}>
      <div>
        <div
          className='text-4xl font-bold text-blue-600'>
          {isPending ? 'Загрузка' : data?.total_customer.toLocaleString('ru-RU')}
        </div>
        <div className='text-1xl flex'>
          <span>{isPending ? 'Загрузка' : `Муж: ${data?.total_man_customer.toLocaleString('ru-RU')}`}</span>
          <span className='mx-2'></span>
          <span>{isPending ? 'Загрузка' : `Жен: ${data?.total_woman_customer.toLocaleString('ru-RU')}`}</span>
        </div>
      </div>
    </Card>
  )
}

export default AnalyticProductsSaleCountCard