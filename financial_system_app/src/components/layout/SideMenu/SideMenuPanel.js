"use client"

import {useRouter} from "next/navigation";
import {PanelMenu} from "primereact/panelmenu";
import {fetchCategoryListQuery} from "@/hooks/api/analytics/category/fetchCategory";

const SideMenuPanel = function () {


  const {data, isPending, isSuccess} = fetchCategoryListQuery();


  if(isPending) return (
    <span>Загрузка...</span>
  )


  const categories = data.results.filter(category => category.parent_id === null).map(category => {return{
    label: category.name,
    icon: 'pi pi-shop',
    command: () => {
      router.push(`/category/${category.pk}`);
    }
  }})

  const router = useRouter();

  const items = [
  {
    label: 'Главная',
    icon: 'pi pi-home',
    command: () => {
      router.push('/');
    }
  },
  {
    label: 'Работник',
    icon: 'pi pi-user',
    command: () => {
      router.push('/employee');
    }
  },
  {
    label: 'Аналитика цен',
    icon: 'pi pi-dollar',
    command: () => {
      router.push('/prices');
    }
  },
  {
    label: 'Покупатели',
    icon: 'pi pi-users',
    command: () => {
      router.push('/customer');
    }
  },
  {
    label: 'Категории',
    icon: 'pi pi-sitemap',
    items: [...categories]
  },
    {
      label: 'Поставки',
      icon: 'pi pi-truck',
      command: () => {
      router.push('/suplyes');
    }
    }
  ]

  return (
    <PanelMenu model={items} className="w-full py-2"
      pt={
        {
          headercontent: {
            className: 'border-none'
          },
          menuContent: {className: 'border-none'}
        }
      }
    />
  )
}

export default SideMenuPanel