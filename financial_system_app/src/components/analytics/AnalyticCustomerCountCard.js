"use client"

import {Card} from 'primereact/card'
import {Dropdown} from 'primereact/dropdown'
import {Divider} from 'primereact/divider'
import {Button} from 'primereact/button'
import {useRef, useState} from "react";
import {OverlayPanel} from "primereact/overlaypanel";

const AnalyticProductsSaleCountCard = function () {

  const [selectedYear, setSelectedYear] = useState(null);

  const years = [
      { name: '2023', code: '2023' },
      { name: '2024', code: '2024' },
  ];

  const op = useRef(null);

  const header =
    <div className='pt-3'>
      <div className='flex flex-row px-3 justify-content-between'>
        <div>
          <div className='text-2xl'>Количество покупателей</div>
          <div className='text-xs'>Зарегистрированных</div>
        </div>
      </div>
      <Divider/>
    </div>

  return (
    <Card header={header}>
      <div>
        <div className='text-4xl'>8,232</div>
        <div className='text-1xl'>За прошлый месяц новых 859</div>
      </div>
    </Card>
  )
}

export default AnalyticProductsSaleCountCard