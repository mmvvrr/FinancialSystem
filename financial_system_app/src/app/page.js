"use client"
import {Button} from 'primereact/button';
import { Chart } from "react-google-charts";
import {Message} from "primereact/message";
import {useEffect, useState} from "react";
import axios from "axios";


export default function Home() {

  const [data, setData] = useState([]);
  // const staticData = await fetch(`http://127.0.0.1:8000/api/products/analytics/product_prices_by_category/?category=8`)

  const getData = async () => {
    const res = await axios.get(`http://localhost:8000/api/products/analytics/product_prices_by_category/?category=8`);
    console.log(res.data)
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);



  return (
    <div className="text-center">
      <Button label="Сука я кнопка" icon="pi pi-plus"></Button>
      <Message text="Я тебя обрадую, в связи с новыми технологиями существую серверные и клиентские компоненты, какой где рендарится я думаю тебе понятно. Чтобы рендарить компоненты с графиком в начале этого компонента ебашь 'use client', воооот такие пироги, а еще, я сука сообщение" />
        <Chart
            chartType="ColumnChart"
            data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
            width="100%"
            height="400px"
            legendToggle
        />
    </div>
  );
}
