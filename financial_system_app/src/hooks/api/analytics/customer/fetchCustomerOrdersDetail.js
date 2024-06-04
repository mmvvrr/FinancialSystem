import {useQuery} from "@tanstack/react-query";
import {fetcher} from "@/utils/fetcher";

const fetchCustomerOrdersDetail= async function (customer) {
  return fetcher(`/customers/${customer}/analytics/customer_orders_detail/`,)
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