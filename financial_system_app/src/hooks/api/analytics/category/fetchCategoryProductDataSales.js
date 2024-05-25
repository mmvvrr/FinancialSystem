import axios from "axios";
import {useQuery} from "@tanstack/react-query";


const fetchCategoryProductionSalesData = async function (product, args) {
  const res = await axios.get(
    `http://127.0.0.1:8000/api/products/${product}/analytics/product_data_sales`,
    {
      params: {
        to_date: args.toDate,
        from_date: args.fromDate,
      }
    }
  );
  return res.data
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