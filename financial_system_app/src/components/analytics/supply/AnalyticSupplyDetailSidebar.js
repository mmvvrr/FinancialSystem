import {Sidebar} from "primereact/sidebar";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import AnalyticSupplyDetailTable from "./AnalyticSupplyDetailTable"


const AnalyticSupplyDetailSidebar = function ({visible, setVisible, supplyId}) {

  const customHeader = (
    <div className="flex align-items-center gap-2">
      <div>
        <div className='text-2xl'>Детализация по доставке</div>
      </div>
    </div>
  );

  return (
    <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)} className="w-full md:w-6">
      <AnalyticSupplyDetailTable/>
    </Sidebar>
  )
}

export default AnalyticSupplyDetailSidebar;