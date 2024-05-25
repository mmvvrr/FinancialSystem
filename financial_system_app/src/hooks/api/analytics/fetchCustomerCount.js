import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from '@/hooks/api'

const fetchCustomerCount = async function (year) {
  const res = await axios.get(
    `${BASE_URL}/customers/analytics/customer_count/`,
  )

  return res.data.customers_count;
}


const fetchCustomerCountQuery = function (year) {
  return useQuery({
    queryKey: ['analytic_products_price', year],
    queryFn: async () => await fetchCustomerCount(year),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchCustomerCount, fetchCustomerCountQuery}