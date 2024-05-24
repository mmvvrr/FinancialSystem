import axios from "axios";
import {useQuery} from "@tanstack/react-query";


const fetchCategoryCustomerCount = async function (category) {
  const res = await axios.get(`http://127.0.0.1:8000/api/categories/${category}/analytics/category_customer_count/`);
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