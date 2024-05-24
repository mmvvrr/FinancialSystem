import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchEmployeeSalaries = async function (category, is_sum) {
  const res = await axios.get(
    `http://127.0.0.1:8000/api/employees/analytics/employee_salaries/`,
  )

  return res.data;
}


const fetchEmployeeSalariesQuery = function () {
  return useQuery({
    queryKey: ['employee_salaries'],
    queryFn: async () => await fetchEmployeeSalaries(),
    options: {
      keepPreviousData: true,
    }
  })
}

export {fetchEmployeeSalaries, fetchEmployeeSalariesQuery}