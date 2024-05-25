import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from '@/hooks/api'

const fetchCustomerPurchases = async function (category, is_sum) {
  const res = await axios.get(
    `${BASE_URL}/customers/analytics/customer_purchases/`,
      {
        params: {
          category: category,
          is_sum: is_sum,
        }
      }
  )

  return res.data;
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