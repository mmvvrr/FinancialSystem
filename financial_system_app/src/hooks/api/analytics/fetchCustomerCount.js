import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {fetchGetProductPriceByCategory} from "@/hooks/api/analytics/useGetProductPriceByCategory";

const fetchCustomerCount = async function (year) {
  const res = await axios.get(
    `http://127.0.0.1:8000/api/customers/analytics/customer_count/`,
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