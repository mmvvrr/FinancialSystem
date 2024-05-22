"use client"

import {Card} from 'primereact/card'
import {Dropdown} from 'primereact/dropdown'
import {Divider} from 'primereact/divider'
import {Button} from 'primereact/button'
import {useRef, useState} from "react";
import {OverlayPanel} from "primereact/overlaypanel";

const AnalyticOrderCountCard = function () {

  const years = [
    { name: '2023', code: '2023' },
    { name: '2024', code: '2024' },
  ];

  const [selectedYear, setSelectedYear] = useState(years[years.length - 1]);

  const cardTitle = 'Количество заказов'


  const op = useRef(null);

  const header =
    <div className='pt-3'>
      <div className='flex flex-row px-3 justify-content-between'>
        <div>
          <div className='text-2xl'>Количество заказов</div>
          <div className='text-xs'>Завершенных</div>
        </div>
        <div className='text-2xl'></div>
        <Button type="button" text rounded icon="pi pi-ellipsis-h" onClick={(e) => op.current.toggle(e)}/>
        <OverlayPanel ref={op}>
          <Dropdown
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.value)} options={years} optionLabel="name"
            placeholder="Выбор года" className="w-full md:w-14rem"
          />
        </OverlayPanel>
      </div>
      <Divider/>
    </div>

  return (
    <Card header={header}>
      <div>
        <div className='text-4xl'>7,969</div>
        <div className='text-1xl'>За прошлый месяц 2,402</div>
      </div>
    </Card>
  )
}

export default AnalyticOrderCountCard