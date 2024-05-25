import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "@/hooks/api";

const fetchProductPriceHistory = async function (product_id, args) {

  const res = await axios.get(
    `${BASE_URL}/products/${product_id}/analytics/product_prices_history/`,
    {
      params: {
        to_date: args?.toDate || [],
        from_date: args?.fromDate
      }
    }
  )

  return res.data.product_price_history;
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