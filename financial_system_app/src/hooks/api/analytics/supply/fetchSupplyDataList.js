import {useQuery} from "@tanstack/react-query";
import {fetcher} from "@/utils/fetcher";

const fetchSupplyDataList = async function () {
  return fetcher(`/supplies/analytics/supply_data_list/`)
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