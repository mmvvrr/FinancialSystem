import {useQuery} from "@tanstack/react-query";
import {fetcher} from "@/utils/fetcher";

const fetchCategoryProductInformation = async function (category) {
  return fetcher(
    `/categories/${category}/analytics/category_product_information/`
  );
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