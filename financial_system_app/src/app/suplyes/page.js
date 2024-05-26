import {AnalyticSupplyDataTable} from "@/components/analytics/supply"

const Home = function() {

  return (
    <div className="px-5 py-4 w-full">

      <div className='mt-5 mb-8'>
        <div className='text-6xl'>
          Страница аналитики поставок 🚚
        </div>
      </div>
      <div className="grid">
        <div className='col-7'>
          <AnalyticSupplyDataTable/>
        </div>
      </div>
    </div>
  );
}

export default Home
