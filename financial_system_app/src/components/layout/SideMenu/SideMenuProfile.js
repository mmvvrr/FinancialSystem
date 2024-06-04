"use client"
import {Avatar} from "primereact/avatar";
import {fetcher} from "@/utils/fetcher";
import {useQuery} from "@tanstack/react-query";
import {AuthActions} from "@/utils/auth/utils";
import axios from "axios";
import {BASE_URL} from "@/hooks/api";


const SideMenuProfile = function () {

  const {getToken} = AuthActions();

  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${getToken("access")}`,
    },
  });

  async function getUser() {
    const res = await api.get(`${BASE_URL}/auth/users/me/`)
    return res.data
  }

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
        <span className="font-bold">{data?.full_name?.length > 1 ? data?.full_name : data?.username}</span>
        <span className="text-sm">{data?.email || "Нет почты"}</span>
      </div>
    </button>
  );
}

export default SideMenuProfile