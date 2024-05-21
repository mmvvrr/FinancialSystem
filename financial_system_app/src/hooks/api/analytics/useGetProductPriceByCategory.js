import axios from "axios";
import {keepPreviousData, useQuery} from "@tanstack/react-query";

const fetchGetProductPriceByCategory = async function (category_id) {
  const response =  await axios.get(
    `http://127.0.0.1:8000/api/products/analytics/product_prices_by_category/`,
    {
      params: {
        category: category_id,
      }
    }
  )
  return response.data.products;
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