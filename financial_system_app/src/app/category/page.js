import AnalyticChartProductPriceByCategory from "@/components/analytics/AnalyticChartProductPriceByCategory";
import {
  AnalyticOrderCountCard,
  AnalyticProductsSaleCountCard,
  AnalyticCustomerCountCard,
  AnalyticSupplyCountCard,
  AnalyticProductTopTable
} from "@/components/analytics";
import {Card} from "primereact/card";


  const years = [
      { name: '2023', code: '2023' },
      { name: '2024', code: '2024' },
  ];

const Home = function() {

  return (
    <div className="px-5 py-4 w-full">

      <div className='mt-5 mb-8'>
        <div className='text-6xl'>
          Общая информация о категориях
        </div>
        <div>

        </div>
      </div>
      <div className="grid">
        <div className='col-3'>
          <AnalyticOrderCountCard years={years}/>
        </div>
        <div className='col-3'>
          <AnalyticProductsSaleCountCard years={years}/>
        </div>
        <div className='col-3'>
          <AnalyticCustomerCountCard/>
        </div>
        <div className='col-3'>
          <AnalyticSupplyCountCard years={years}/>
        </div>
        <div className="col-7">
          <AnalyticProductTopTable/>
        </div>
        <div className="col-5">
          <Card title="Цены товаров по категориям">
            <AnalyticChartProductPriceByCategory/>
          </Card>
        </div>
        {/*<div className="col-4">*/}
        {/*  <Card title="Simple Card">*/}
        {/*    <AnalyticChartProductPriceByCategory/>*/}
        {/*  </Card>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default Home
