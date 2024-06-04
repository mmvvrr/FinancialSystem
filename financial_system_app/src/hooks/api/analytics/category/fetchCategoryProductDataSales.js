import {useQuery} from "@tanstack/react-query";
import {fetcher} from "@/utils/fetcher";


const fetchCategoryProductionSalesData = async function (product, args) {
  return fetcher (
    `/products/${product}/analytics/product_data_sales`,
    {
      params: {
        to_date: args.toDate,
        from_date: args.fromDate,
      }
    }
  );
}

const fetchCategoryProductionSalesDataQuery = function (product, args) {
  return useQuery({
    queryKey: ['category-product-sales-data', product, args],
    queryFn: async () => await fetchCategoryProductionSalesData(product, args),
    options: {
      keepPreviousData: true,
    },
  })
}


export {fetchCategoryProductionSalesData, fetchCategoryProductionSalesDataQuery}