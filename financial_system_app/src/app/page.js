import AnalyticChartProductPriceByCategory from "@/components/analytics/AnalyticChartProductPriceByCategory";
import {Card} from "primereact/card";

const Home = function() {

  return (
    <div className="px-5 py-4 w-full">

      <div className='mt-5 mb-8'>
        <div className='text-6xl'>
          Добро пожаловать в систему 👋
        </div>
        <div>
          Система предназначена для аналитики предприятия
        </div>
      </div>
      <div className="grid">
        <div className="col-4">
          <Card title="Simple Card">
            <AnalyticChartProductPriceByCategory/>
          </Card>
        </div>
        <div className="col-4">
          <Card title="Simple Card">
            <AnalyticChartProductPriceByCategory/>
          </Card>
        </div>
        <div className="col-4">
          <Card title="Simple Card">
            <AnalyticChartProductPriceByCategory/>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home
