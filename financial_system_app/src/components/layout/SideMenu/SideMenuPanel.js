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
    label: 'Аналитика',
    icon: 'pi pi-link',
    command: () => {
      router.push('/analytics');
    }
  },
  {
    label: 'Router',
    icon: 'pi pi-palette',
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
      label: 'External',
      icon: 'pi pi-home',
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
    <PanelMenu model={items} className="w-full py-2"/>
  )
}

export default SideMenuPanel