"use client"

import {useRouter} from "next/navigation";
import {PanelMenu} from "primereact/panelmenu";

const SideMenuPanel = function () {
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
      router.push('/analytics');
    }
  },
  {
    label: 'Покупатели',
    icon: 'pi pi-users',
    command: () => {
      router.push('/analytics');
    }
  },
  {
    label: 'Категории',
    icon: 'pi pi-sitemap',
    items: [
      {
        label: 'Styled',
        icon: 'pi pi-eraser',
        // url: '/theming'
      },
      {
        label: 'Unstyled',
        icon: 'pi pi-heart',
        // url: '/unstyled'
      }
    ]
  },
    {
      label: 'Поставки',
      icon: 'pi pi-truck',
      items: [
        {
          label: 'React.js',
          icon: 'pi pi-star',
          // url: 'https://react.dev/'
        },
        {
          label: 'Vite.js',
          icon: 'pi pi-bookmark',
          // url: 'https://vite.dev/'
        }
      ]
    }
  ];

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