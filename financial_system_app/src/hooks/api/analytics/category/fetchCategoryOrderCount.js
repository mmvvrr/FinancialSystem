import {useQuery} from "@tanstack/react-query";
import {fetcher} from "@/utils/fetcher";


const fetchCategoryOrderCount = async function (category) {
  return fetcher(`/categories/${category}/analytics/category_order_count/`);
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