import {Avatar} from "primereact/avatar";

const SideMenuProfile = function () {

  return (
    <button
      className='w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround'>
      <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2"
              shape="circle" size="xlarge"/>
      <div className="flex flex-column align">
        <span className="font-bold">Елена Никитина</span>
        <span className="text-sm">Аналитик</span>
      </div>
    </button>
  );
}

export default SideMenuProfile