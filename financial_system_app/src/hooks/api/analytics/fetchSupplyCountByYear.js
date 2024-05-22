import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {fetchGetProductPriceByCategory} from "@/hooks/api/analytics/useGetProductPriceByCategory";

const fetchSupplyCountByYear = async function (year) {
  const res = await axios.get(
    `http://127.0.0.1:8000/api/supplies/analytics/supply_count_by_year/`,
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