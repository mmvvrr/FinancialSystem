import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from '@/hooks/api'
import apiAnalytic from "@/utils/apiAnalytic";
import {fetcher} from "@/utils/fetcher";

const fetchCustomersData= async function () {
  return fetcher(`/customers/analytics/customers_information/`,)
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