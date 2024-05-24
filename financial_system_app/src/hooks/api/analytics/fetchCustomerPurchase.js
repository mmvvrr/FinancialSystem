import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchCustomerPurchases = async function (category, is_sum) {
  const res = await axios.get(
    `http://127.0.0.1:8000/api/customers/analytics/customer_purchases/`,
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