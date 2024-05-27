import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "@/hooks/api";

const fetchSupplyDataDetail = async function (supply) {
  const res = await axios.get(`${BASE_URL}/supplies/${supply}/analytics/supply_data_detail/`)
  return res.data.result;
}


const fetchSupplyDataDetailQuery = function (supply) {
  return useQuery({
    queryKey: ['supply-data-detail', supply],
    queryFn: async () => await fetchSupplyDataDetail(supply),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchSupplyDataDetail, fetchSupplyDataDetailQuery}