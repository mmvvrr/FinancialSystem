import SideMenuPanel from "@/components/layout/SideMenu/SideMenuPanel";
import SideMenuProfile from "@/components/layout/SideMenu/SideMenuProfile";
import {Divider} from  "primereact/divider";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {InputText} from "primereact/inputtext";

const SideMenuContainer = function () {
  return (
    <div className='w-full'>
      <SideMenuProfile/>
      <IconField iconPosition="left" className='py-3'>
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText v-model="value1" placeholder="Search" />
      </IconField>
      <SideMenuPanel/>
    </div>
  )
}

export default SideMenuContainer