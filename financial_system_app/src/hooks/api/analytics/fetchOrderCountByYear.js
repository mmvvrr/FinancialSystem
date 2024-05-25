import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from '@/hooks/api'

const fetchOrderCountByYear = async function (year) {
  const res = await axios.get(
    `${BASE_URL}/orders/analytics/order_count_by_year/`,
    {
      params: {
        year: year,
      }
    }
  )

  return res.data.order_count;
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