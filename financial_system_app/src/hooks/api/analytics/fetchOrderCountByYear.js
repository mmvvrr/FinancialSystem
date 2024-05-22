import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {fetchGetProductPriceByCategory} from "@/hooks/api/analytics/useGetProductPriceByCategory";

const fetchOrderCountByYear = async function (year) {
  const res = await axios.get(
    `http://127.0.0.1:8000/api/orders/analytics/order_count_by_year/`,
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