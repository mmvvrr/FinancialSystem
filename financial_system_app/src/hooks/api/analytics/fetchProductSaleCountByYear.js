import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {fetchGetProductPriceByCategory} from "@/hooks/api/analytics/useGetProductPriceByCategory";

const fetchProductSaleCountByYear = async function (year) {
  const res = await axios.get(
    `http://127.0.0.1:8000/api/products/analytics/products_by_year/`,
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