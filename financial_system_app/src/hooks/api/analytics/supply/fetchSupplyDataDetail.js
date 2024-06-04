import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "@/hooks/api";
import apiAnalytic from "@/utils/apiAnalytic";
import {fetcher} from "@/utils/fetcher";

const fetchSupplyDataDetail = async function (supply) {
  return fetcher(`/supplies/${supply}/analytics/supply_data_detail/`)
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