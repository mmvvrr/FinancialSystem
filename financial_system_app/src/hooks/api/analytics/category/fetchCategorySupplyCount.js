import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "@/hooks/api";


const fetchCategorySupplyCount = async function (category) {
  const res = await axios.get(
    `${BASE_URL}/categories/${category}/analytics/category_supply_count/`
  );
  return res.data
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