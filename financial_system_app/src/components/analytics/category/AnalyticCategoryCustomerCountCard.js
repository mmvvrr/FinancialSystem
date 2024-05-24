import {Card} from "primereact/card";
import {Divider} from "primereact/divider";
import {fetchCategoryCustomerCountQuery} from "@/hooks/api/analytics/category/fetchCategoryCustomerCount";


const AnalyticCategoryCustomerCountCard = function (props) {

  const {data, isPending, isError} = fetchCategoryCustomerCountQuery(props.category_id)

  const header =
    <div className='pt-3'>
      <div className='flex flex-row px-3 justify-content-between'>
        <div>
          <div className='text-2xl'>Количество покупателей</div>
          <div className='text-xs'>Кол-во покупателей купивших данную категорию</div>
        </div>
      </div>
      <Divider/>
    </div>


  if (isError) {
    return <div>Error</div>
  }

  return (
    <Card header={header}>
      <div>
        <div className='text-4xl font-bold text-blue-600'>{isPending ? 'Загрузка' : data.category_customer_count.toLocaleString('ru-RU')}</div>
        <div className='text-1xl'>За весь период</div>
      </div>
    </Card>
  )
}

export default AnalyticCategoryCustomerCountCard

