import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from '@/hooks/api'
import {fetcher} from "@/utils/fetcher";

const fetchSupplyCountByYear = async function (year) {
  return fetcher(
    `/supplies/analytics/supply_count_by_year/`,
    {
      params: {
        year: year,
      }
    }
  )
}


const fetchSupplyCountByYearQuery = function (year) {
  return useQuery({
    queryKey: ['analytic-supply-count', year],
    queryFn: async () => await fetchSupplyCountByYear(year),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchSupplyCountByYear, fetchSupplyCountByYearQuery}