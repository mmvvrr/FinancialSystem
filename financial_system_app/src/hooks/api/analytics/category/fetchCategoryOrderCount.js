import axios from "axios";
import {useQuery} from "@tanstack/react-query";


const fetchCategoryOrderCount = async function (category) {
  const res = await axios.get(`http://127.0.0.1:8000/api/categories/${category}/analytics/category_order_count/`);
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