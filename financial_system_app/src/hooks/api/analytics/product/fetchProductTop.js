import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "@/hooks/api";
import apiAnalytic from "@/utils/apiAnalytic";
import {fetcher} from "@/utils/fetcher";

const fetchProductTop = async function (args) {
  return fetcher(
    `${BASE_URL}/products/analytics/products_top/`,
    {
      params: {
        category: args?.category || [],
        count: args?.count || 10
      }
    }
  )
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