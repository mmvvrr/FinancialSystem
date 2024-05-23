import {Card} from "primereact/card";
import useGetPastMonthOrderCount from "@/hooks/analytics/useGetPastMonthOrderCount";
import {Button} from "primereact/button";
import {OverlayPanel} from "primereact/overlaypanel";
import {Dropdown} from "primereact/dropdown";
import {Divider} from "primereact/divider";
import {fetchCategoryOrderCountQuery} from "@/hooks/api/analytics/category/fetchCategoryOrderCount";


const AnalyticCategoryCountOrderCard = function (props) {

  const {data, isPending, isError} = fetchCategoryOrderCountQuery(props.category_id)

  const header =
    <div className='pt-3'>
      <div className='flex flex-row px-3 justify-content-between'>
        <div>
          <div className='text-2xl'>Количество заказов</div>
          <div className='text-xs'>Завершенных</div>
        </div>
      </div>
      <Divider/>
    </div>


  if (isError) {
    return <div>Error</div>
  }

  console.log(data)

  return (
    <Card header={header}>
      <div>
        <div className='text-4xl font-bold text-blue-600'>{isPending ? 'Загрузка' : data.category_total_order.toLocaleString('ru-RU')}</div>
        <div className='text-1xl'>Кол-во покупок по данной категории</div>
      </div>
    </Card>
  )
}

export default AnalyticCategoryCountOrderCard

