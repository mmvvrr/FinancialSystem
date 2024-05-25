import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from '@/hooks/api'

const fetchProductSaleCountByYear = async function (year) {
  const res = await axios.get(
    `${BASE_URL}/products/analytics/products_by_year/`,
    {
      params: {
        year: year,
      }
    }
  )

  return res.data.products_by_year;
}


const fetchProductSaleCountByYearQuery = function (year) {
  return useQuery({
    queryKey: ['analytic-product-sale-count', year],
    queryFn: async () => await fetchProductSaleCountByYear(year),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchProductSaleCountByYear, fetchProductSaleCountByYearQuery}