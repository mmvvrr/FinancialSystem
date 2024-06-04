import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "@/hooks/api";
import apiAnalytic from "@/utils/apiAnalytic";
import {fetcher} from "@/utils/fetcher";


const fetchCategoryProductCountSale = async function (category) {
  return fetcher(`${BASE_URL}/categories/${category}/analytics/category_product_count_sale/`);
}

const fetchCategoryProductCountSaleQuery = function (category) {
  return useQuery({
    queryKey: ['category-product-count-sale', category],
    queryFn: async () => await fetchCategoryProductCountSale(category),
    options: {
      keepPreviousData: true,
    },
  })
}


export {fetchCategoryProductCountSale, fetchCategoryProductCountSaleQuery}