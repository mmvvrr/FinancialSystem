import {useQuery} from "@tanstack/react-query";
import {fetcher} from "@/utils/fetcher";

const fetchCustomerCount = async function (year) {
  return fetcher(`/customers/analytics/customer_count/`,)
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