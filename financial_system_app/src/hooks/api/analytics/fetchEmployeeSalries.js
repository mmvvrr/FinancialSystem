import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {BASE_URL} from '@/hooks/api'
import apiAnalytic from "@/utils/apiAnalytic";
import {fetcher} from "@/utils/fetcher";

const fetchEmployeeSalaries = async function (category, is_sum) {
  return fetcher(`/employees/analytics/employee_salaries/`)
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