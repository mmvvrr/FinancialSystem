"use client"
import {Avatar} from "primereact/avatar";
import {fetcher} from "@/utils/fetcher";
import {useQuery} from "@tanstack/react-query";

export function getUser() {
  return fetcher(`/auth/users/me/`)
}

const SideMenuProfile = function () {

  const {data, isError, isPending, error} = useQuery({
    queryKey: ['users-me'],
    queryFn: async () => await getUser(),
    options: {
      keepPreviousData: true,
    }
  })

  if (isPending) return (
    <span>
      Загрузка профиля...
    </span>
  )

  return (
    <button
      className='w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround'>
      <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2"
              shape="circle" size="xlarge"/>
      <div className="flex flex-column align">
        <span className="font-bold">{data?.username || "Нет логина"}</span>
        <span className="text-sm">{data?.email || "Нет почты"}</span>
      </div>
    </button>
  );
}

export default SideMenuProfile