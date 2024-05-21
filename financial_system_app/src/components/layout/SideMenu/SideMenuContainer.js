import SideMenuPanel from "@/components/layout/SideMenu/SideMenuPanel";
import SideMenuProfile from "@/components/layout/SideMenu/SideMenuProfile";
import {Divider} from  "primereact/divider"

const SideMenuContainer = function () {
  return (
    <div className='w-full'>
      <SideMenuProfile/>
      <Divider className='mx-auto w-11' />
      <SideMenuPanel/>
    </div>
  )
}

export default SideMenuContainer