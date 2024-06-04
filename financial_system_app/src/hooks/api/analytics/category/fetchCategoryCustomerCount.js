import {useQuery} from "@tanstack/react-query";
import {fetcher} from "@/utils/fetcher";


const fetchCategoryCustomerCount = async function (category) {
  return fetcher(`/categories/${category}/analytics/category_customer_count/`);
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