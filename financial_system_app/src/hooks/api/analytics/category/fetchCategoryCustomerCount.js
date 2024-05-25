import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from "@/hooks/api";


const fetchCategoryCustomerCount = async function (category) {
  const res = await axios.get(`${BASE_URL}/categories/${category}/analytics/category_customer_count/`);
  return res.data
}

const fetchCategoryCustomerCountQuery = function (category) {
  return useQuery({
    queryKey: ['categories-customer-count', category],
    queryFn: async () => await fetchCategoryCustomerCount(category),
    options: {
      keepPreviousData: true,
    },
  })
}


export {fetchCategoryCustomerCount, fetchCategoryCustomerCountQuery}