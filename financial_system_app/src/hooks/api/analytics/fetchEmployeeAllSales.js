import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchEmployeeAllSales = async function (category, is_sum) {
  const res = await axios.get(
    `http://127.0.0.1:8000/api/employees/analytics/employee_all_sales/`,
  )

  return res.data;
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