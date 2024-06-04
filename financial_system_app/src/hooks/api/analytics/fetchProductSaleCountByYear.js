import {useQuery} from "@tanstack/react-query";
import {fetcher} from "@/utils/fetcher";

const fetchProductSaleCountByYear = async function (year) {
  return fetcher(
    `/products/analytics/products_by_year/`,
    {
      params: {
        year: year,
      }
    }
  )
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