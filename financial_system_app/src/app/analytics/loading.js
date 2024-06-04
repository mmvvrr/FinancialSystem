import {ProgressSpinner} from "primereact/progressspinner"

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  // return (<span>Загрузка...</span>)
  return(
    <div className='w-full flex justify-content-center align-content-center'>
      <ProgressSpinner />
    </div>
  )
}