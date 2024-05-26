import {Sidebar} from "primereact/sidebar";
import AnalyticCustomerOrdersDetailTable from "./AnalyticCustomerOrdersDetailTable"


const AnalyticCustomerDetailSidebar = function ({visible, setVisible, customerId}) {


  const customHeader = (
    <div className="flex align-items-center gap-2">
      <div>
        <div className='text-2xl'>Детализация по покупателю</div>
      </div>
    </div>
  );

  return (
    <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)} className="w-full md:w-6">
      <AnalyticCustomerOrdersDetailTable customerId={customerId}/>
    </Sidebar>
  )
}

export default AnalyticCustomerDetailSidebar;