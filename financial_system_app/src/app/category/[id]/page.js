"use client"

import {fetchCategoryDetailQuery} from "@//hooks/api/analytics/category/fetchCategory"

export default function Page({ params }) {

  const {data, isFetching, isLoading, error, isError, isPending} = fetchCategoryDetailQuery(params.id)

  if (isPending) return (
    <span>Загрузка...</span>
  )

  return <div>My Post: {data.name}</div>
}