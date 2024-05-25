import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchProductTop = async function (args) {
  const res = await axios.get(
    `http://127.0.0.1:8000/api/products/analytics/products_top/`,
    {
      params: {
        category: args?.category || [],
        count: args?.count || 10
      }
    }
  )

  return res.data.products_top;
}


const fetchProductTopQuery = function (args) {
  return useQuery({
    queryKey: ['analytic-product-top', args],
    queryFn: async () => await fetchProductTop(args),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchProductTop, fetchProductTopQuery}