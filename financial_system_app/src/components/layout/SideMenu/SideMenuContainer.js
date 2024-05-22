import SideMenuPanel from "@/components/layout/SideMenu/SideMenuPanel";
import SideMenuProfile from "@/components/layout/SideMenu/SideMenuProfile";
import {Divider} from  "primereact/divider";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {InputText} from "primereact/inputtext";

const SideMenuContainer = function () {
  return (
    <div className='w-full'>
      <div className='w-full flex my-3 px-3 text-3xl'>
        🚀 Аналитика
      </div>
      <Divider/>
      <SideMenuProfile/>
      <IconField iconPosition="left" className='py-3 w-full'>
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText v-model="value1" placeholder="Поиск" className='w-full'/>
      </IconField>
      <SideMenuPanel/>
    </div>
  )
}

export default SideMenuContainer