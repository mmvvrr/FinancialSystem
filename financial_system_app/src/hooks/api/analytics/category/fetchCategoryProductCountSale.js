import axios from "axios";
import {useQuery} from "@tanstack/react-query";


const fetchCategoryProductCountSale = async function (category) {
  const res = await axios.get(
    `http://127.0.0.1:8000/api/categories/${category}/analytics/category_product_count_sale/`
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