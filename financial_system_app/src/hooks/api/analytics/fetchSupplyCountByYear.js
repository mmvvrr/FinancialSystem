import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from '@/hooks/api'

const fetchSupplyCountByYear = async function (year) {
  const res = await axios.get(
    `${BASE_URL}/supplies/analytics/supply_count_by_year/`,
    {
      params: {
        year: year,
      }
    }
  )

  return res.data.supply_count;
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