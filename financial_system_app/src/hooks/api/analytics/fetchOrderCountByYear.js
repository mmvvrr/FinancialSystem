import {useQuery} from "@tanstack/react-query";;
import {fetcher} from "@/utils/fetcher";

const fetchOrderCountByYear = async function (year) {
  return fetcher(
    `/orders/analytics/order_count_by_year/`,
    {
      params: {
        year: year,
      }
    }
  )
}


const fetchOrderCountByYearQuery = function (year) {
  return useQuery({
    queryKey: ['analytic-order-count', year],
    queryFn: async () => await fetchOrderCountByYear(year),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchOrderCountByYear, fetchOrderCountByYearQuery}