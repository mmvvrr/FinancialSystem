import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from '@/hooks/api'

const fetchCustomersData= async function () {
  const res = await axios.get(
    `${BASE_URL}/customers/analytics/customers_information/`,
  )

  return res.data.result;
}


const fetchCustomersDataQuery = function (y) {
  return useQuery({
    queryKey: ['customers-data'],
    queryFn: async () => await fetchCustomersData(),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchCustomersData, fetchCustomersDataQuery}