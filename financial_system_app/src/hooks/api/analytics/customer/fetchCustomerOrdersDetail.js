import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from '@/hooks/api'

const fetchCustomerOrdersDetail= async function (customer) {
  const res = await axios.get(
    `${BASE_URL}/customers/${customer}/analytics/customer_orders_detail/`,
  )

  return res.data.result;
}


const fetchCustomerOrdersDetailQuery = function (customer) {
  return useQuery({
    queryKey: ['customers-orders-detail', customer],
    queryFn: async () => await fetchCustomerOrdersDetail(customer),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchCustomerOrdersDetail, fetchCustomerOrdersDetailQuery}