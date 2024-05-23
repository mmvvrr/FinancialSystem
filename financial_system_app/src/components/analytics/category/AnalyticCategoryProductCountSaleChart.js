import {Chart} from "react-google-charts";
import {Card} from "primereact/card";


const AnalyticCategoryProductCountSaleChart = function () {

  const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];

  return (
    <Card title='Количество продаж'>
      <Chart chartType="ColumnChart" width="100%" height="400px" data={data} legendToggle={false}/>
    </Card>
  )
}


export default AnalyticCategoryProductCountSaleChart