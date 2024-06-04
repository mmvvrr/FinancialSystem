import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import apiAnalytic from "@/utils/apiAnalytic";
import {fetcher} from "@/utils/fetcher";

const fetchEmployeeAllSales = async function (category, is_sum) {
  return fetcher(`/employees/analytics/employee_all_sales/`,)
}


const fetchEmployeeAllSalesQuery = function () {
  return useQuery({
    queryKey: ['employee_all_sales'],
    queryFn: async () => await fetchEmployeeAllSales(),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchEmployeeAllSales, fetchEmployeeAllSalesQuery}