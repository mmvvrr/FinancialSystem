"use client"

import {redirect, useRouter} from "next/navigation";
import {PanelMenu} from "primereact/panelmenu";
import {fetchCategoryListQuery} from "@/hooks/api/analytics/category/fetchCategory";
import {useState, useEffect} from "react";
import {AuthActions} from "@/utils/auth/utils";
import {useQueryClient} from "@tanstack/react-query";

const SideMenuPanel = function () {
  const queryClient = useQueryClient()
  const router = useRouter();
  const {data, isPending, isSuccess} = fetchCategoryListQuery();
  const [items, setItems] = useState([]);
  const {logout, removeTokens} = AuthActions();
  const rootUrl = '/analytics';

  useEffect(() => {
    const categories = data?.results?.filter(category => category.parent_id === null).map(category => {
      return {
        label: category.name,
        icon: 'pi pi-shop',
        command: () => {
          router.push(rootUrl + `/category/${category.pk}`);
        }
      }
    }) || []
    setItems([
      {
        label: 'Главная',
        icon: 'pi pi-home',
        className: 'text-3xl',
        command: () => {
          router.push('/analytics');
        }
      },
      {
        label: 'Работник',
        icon: 'pi pi-user',
        command: () => {
          router.push(`${rootUrl}/employee`);
        }
      },
      {
        label: 'Покупатели',
        icon: 'pi pi-users',
        command: () => {
          router.push( `${rootUrl}/customer`);
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
          router.push(`${rootUrl}/suplyes`);
        }
      },
      {
        label: 'Выход',
        icon: 'pi pi-times-circle',
        command: () => {
          logout()
            .res(() => {
              removeTokens();
              router.push("/login");
              queryClient.removeQueries({queryKey: ['users-me']})
            })
            .catch((err) => {
              console.log("root", {type: "manual", message: err.json.detail});
            });
        }
      }
    ])
  }, [data])

  if(isPending) return (
    <span>Загрузка...</span>
  )

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