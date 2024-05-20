"use client"
import {Button} from 'primereact/button';
import { Chart } from "react-google-charts";
import {Message} from "primereact/message";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [dataGraph, setDataGraph] = useState([]);

  const getData = async function () {
    const res = await axios.get(`http://localhost:8000/api/products/analytics/product_prices_by_category/?category=8`);
    setProducts(res.data.products);
    const formateDatas = products.map(product => {
      return [product.name, product.price]
    });

    await setDataGraph(formateDatas);
  }

  useEffect(() => {
    // (async function () {
    //   const data = await getData();
    //   await setProducts(data.products);
    //
    //   const formateDatas = await data.map(product => {
    //     return [product.name, product.price]
    //   });
    //   setDataGraph(formateDatas);
    // })();
    getData();
  }, []);



  return (
    <div className="text-center">
      <Button label="Сука я кнопка" icon="pi pi-plus"></Button>
      <Message text="Я тебя обрадую, в связи с новыми технологиями существую серверные и клиентские компоненты, какой где рендарится я думаю тебе понятно. Чтобы рендарить компоненты с графиком в начале этого компонента ебашь 'use client', воооот такие пироги, а еще, я сука сообщение" />
      {
        dataGraph.length > 0 &&
          <Chart
            chartType="ColumnChart"
            data={dataGraph}
            width="100%"
            height="400px"
            legendToggle
          />
      }
    </div>
  );
}
