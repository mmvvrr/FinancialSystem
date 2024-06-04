import AnalyticCustomerPurchasesCard from "@/components/analytics/customer/AnalyticCustomerPurchasesCard";
import AnalyticEmployeeSalariesChart from "@/components/analytics/employee/AnalyticEmployeeSalariesChart";
import AnalyticEmployeeAllSalesChart from "@/components/analytics/employee/AnalyticEmployeeAllSalesChart";
import AnalyticEmployeeSalariesTable from "@/components/analytics/employee/AnalyticEmployeeSalariesTable";
import AnalyticEmployeeAllSalesTable from "@/components/analytics/employee/AnalyticEmployeeAllSalesTable";


  const years = [
      { name: '2023', code: '2023' },
      { name: '2024', code: '2024' },
  ];

const Home = function() {

  return (
    <div className='px-5 py-4 w-full'>
      <div className='text-6xl'>
        Аналитика по сотрудникам
      </div>
      <div className='grid'>
        <div className='col-7'>
          <AnalyticEmployeeSalariesChart/>
        </div>
        <div className='col-5'>
          <AnalyticEmployeeSalariesTable/>
        </div>
        <div className='col-7'>
          <AnalyticEmployeeAllSalesChart/>
        </div>
        <div className='col-5'>
          <AnalyticEmployeeAllSalesTable/>
        </div>
      </div>
    </div>

  );
}

export default Home
