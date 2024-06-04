import {useQuery} from "@tanstack/react-query";
import {fetcher} from "@/utils/fetcher";


const fetchGetProductPriceByCategory = async function (category_id) {
  return fetcher(
    `/products/analytics/product_prices_by_category/`,
    {
      params: {
        category: category_id,
      }
    }
  )
}

const fetchGetProductPriceByCategoryQuery = function (category_id) {
  return useQuery({
    queryKey: ['analytic_products_price', category_id],
    queryFn: async () => await fetchGetProductPriceByCategory(category_id),
    options: {
      keepPreviousData: true,
    }
  })
}

export { fetchGetProductPriceByCategoryQuery, fetchGetProductPriceByCategory }