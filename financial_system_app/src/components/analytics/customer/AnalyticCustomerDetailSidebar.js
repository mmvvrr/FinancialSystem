import {Sidebar} from "primereact/sidebar";
import {fetchCustomerOrdersDetailQuery} from "@/hooks/api/analytics/customer/fetchCustomerOrdersDetail";


const AnalyticCustomerDetailSidebar = function ({visible, setVisible, customerId}) {


  const {data, isPending, isError, error} = fetchCustomerOrdersDetailQuery(customerId)


  if (isPending) return (
    <span>Загрузка...</span>
  )

  const customHeader = (
    <div className="flex align-items-center gap-2">
      <div>
        <div className='text-2xl'>Детализация по покупателю</div>
        <span>{data.full_name}</span>
      </div>
    </div>
  );

  return (
    <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)} className="w-full md:w-5">
    </Sidebar>
  )
}

export default AnalyticCustomerDetailSidebar;