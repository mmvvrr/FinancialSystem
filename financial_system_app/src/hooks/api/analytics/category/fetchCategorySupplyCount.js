import {useQuery} from "@tanstack/react-query";
import {fetcher} from "@/utils/fetcher";


const fetchCategorySupplyCount = async function (category) {
  return fetcher(`/categories/${category}/analytics/category_supply_count/`);
}

const fetchCategorySupplyCountQuery = function (category) {
  return useQuery({
    queryKey: ['category-supply-count', category],
    queryFn: async () => await fetchCategorySupplyCount(category),
    options: {
      keepPreviousData: true,
    },
  })
}


export {fetchCategorySupplyCount, fetchCategorySupplyCountQuery}