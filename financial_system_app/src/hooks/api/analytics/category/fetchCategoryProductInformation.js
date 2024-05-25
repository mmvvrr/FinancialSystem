import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {fetchCategoryOrderCount} from "@/hooks/api/analytics/category/fetchCategoryOrderCount";
import {BASE_URL} from "@/hooks/api";

const fetchCategoryProductInformation = async function (category) {
  const res = await axios.get(
    `${BASE_URL}/categories/${category}/analytics/category_product_information/`
  );
  return res.data
}

const fetchCategoryProductInformationQuery = function (category) {
  return useQuery({
    queryKey: ['categories-product-information', category],
    queryFn: async () => await fetchCategoryProductInformation(category),
    options: {
      keepPreviousData: true,
    },
  })
}


export {fetchCategoryProductInformation, fetchCategoryProductInformationQuery}