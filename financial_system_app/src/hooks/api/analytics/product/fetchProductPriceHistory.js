import {useQuery} from "@tanstack/react-query";
import {fetcher} from "@/utils/fetcher";

const fetchProductPriceHistory = async function (product_id, args) {
  return fetcher(
    `/products/${product_id}/analytics/product_prices_history/`,
    {
      params: {
        to_date: args?.toDate || [],
        from_date: args?.fromDate
      }
    }
  )
}


const fetchProductPriceHistoryQuery = function (productId, args) {
  return useQuery({
    queryKey: ['analytic-product-price-history', productId, args?.toDate, args?.fromDate],
    queryFn: async () => await fetchProductPriceHistory(productId, args),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchProductPriceHistory, fetchProductPriceHistoryQuery}