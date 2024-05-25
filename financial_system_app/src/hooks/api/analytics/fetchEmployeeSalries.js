import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from '@/hooks/api'

const fetchEmployeeSalaries = async function (category, is_sum) {
  const res = await axios.get(
    `${BASE_URL}/employees/analytics/employee_salaries/`,
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