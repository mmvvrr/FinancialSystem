import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "@/hooks/api";


const fetchCategoryProductCountSale = async function (category) {
  const res = await axios.get(
    `${BASE_URL}/categories/${category}/analytics/category_product_count_sale/`
  );
  return res.data
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