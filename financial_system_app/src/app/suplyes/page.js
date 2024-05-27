"use client"

import {AnalyticSupplyDataTable, AnalyticSupplyDetailSidebar, AnalyticSupplyDataListChart} from "@/components/analytics/supply"
import {useState} from "react";

const Home = function() {

  const [visible, setVisible] = useState(false);
  const [supplyId, setSupplyId] = useState(null);


  const openSupplyDetail = function (supplyId) {
    setSupplyId(supplyId)
    setVisible(true);
  }

  return (
    <div className="px-5 py-4 w-full">

      <div className='mt-5 mb-8'>
        <div className='text-6xl'>
          Страница аналитики поставок 🚚
        </div>
      </div>
      <div className="grid">
        <div className='col-7'>
          <AnalyticSupplyDataTable openSupplyDetail={openSupplyDetail}/>
        </div>
        <div className='col-5'>
          <AnalyticSupplyDataListChart/>
        </div>
      </div>
      <AnalyticSupplyDetailSidebar visible={visible} setVisible={setVisible} supplyId={supplyId}/>
    </div>
  );
}

export default Home
