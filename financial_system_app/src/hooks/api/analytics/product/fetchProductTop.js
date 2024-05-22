import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchProductTop = async function (args) {

  const count = args?.count || 10
  const category = args?.category || []

  const res = await axios.get(
    `http://127.0.0.1:8000/api/products/analytics/products_top/`,
    {
      params: {
        category: category || [],
        count: count || 10
      }
    }
  )

  return res.data.products_top;
}


const fetchProductTopQuery = function (args) {
  const count = args?.count || 10
  const category = args?.category || [8,9,10]


  return useQuery({
    queryKey: ['analytic-product-top', count, category],
    queryFn: async () => await fetchProductTop({count: count, category: category}),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchProductTop, fetchProductTopQuery}