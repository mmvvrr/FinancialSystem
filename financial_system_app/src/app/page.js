import {Button} from 'primereact/button';
import {Message} from "primereact/message";
import AnalyticChartProductPriceByCategory from "@/components/analytics/AnalyticChartProductPriceByCategory";
const Home = function() {

  return (
    <div className="text-center">
      <Button label="Сука я кнопка" icon="pi pi-plus"></Button>
      <AnalyticChartProductPriceByCategory/>
    </div>
  );
}

export default Home
