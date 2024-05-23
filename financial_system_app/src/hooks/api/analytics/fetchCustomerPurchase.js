import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchCustomerPurchases = async function (year) {
  const res = await axios.get(
    `http://127.0.0.1:8000/api/customers/analytics/customer_purchases/`,
  )

  return res.data.customer_purchases;
}


const fetchCustomerPurchasesQuery = function (category) {
  return useQuery({
    queryKey: ['customer_purchases', category],
    queryFn: async () => await fetchCustomerPurchases(category),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchCustomerPurchases, fetchCustomerPurchasesQuery}