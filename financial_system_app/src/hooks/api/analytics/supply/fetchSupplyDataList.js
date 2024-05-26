import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "@/hooks/api";

const fetchSupplyDataList = async function () {

  const res = await axios.get(`${BASE_URL}/supplies/analytics/supply_data_list/`)
  return res.data.result;
}


const fetchSupplyDataListQuery = function () {
  return useQuery({
    queryKey: ['supply-data-list'],
    queryFn: async () => await fetchSupplyDataList(),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchSupplyDataList, fetchSupplyDataListQuery}