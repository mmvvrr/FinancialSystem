import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from '@/hooks/api'
import {fetcher} from "@/utils/fetcher";

const fetchCustomerPurchases = async function (category, is_sum) {
  return fetcher(
    `/customers/analytics/customer_purchases/`,
      {
        params: {
          category: category,
          is_sum: is_sum,
        }
      }
  )
}


const fetchCustomerPurchasesQuery = function (category, is_sum) {
  return useQuery({
    queryKey: ['customer_purchases', category, is_sum],
    queryFn: async () => await fetchCustomerPurchases(category, is_sum),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchCustomerPurchases, fetchCustomerPurchasesQuery}