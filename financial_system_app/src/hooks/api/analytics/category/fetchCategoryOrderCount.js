import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "@/hooks/api";


const fetchCategoryOrderCount = async function (category) {
  const res = await axios.get(`${BASE_URL}/categories/${category}/analytics/category_order_count/`);
  return res.data
}

const fetchCategoryOrderCountQuery = function (category) {
  return useQuery({
    queryKey: ['categories-order-count', category],
    queryFn: async () => await fetchCategoryOrderCount(category),
    options: {
      keepPreviousData: true,
    },
  })
}


export {fetchCategoryOrderCount, fetchCategoryOrderCountQuery}