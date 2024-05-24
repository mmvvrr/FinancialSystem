import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchProductPriceHistory = async function (product_id, args) {

  const res = await axios.get(
    `http://127.0.0.1:8000/api/products/${product_id}/analytics/product_prices_history/`,
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