"use client"

import {Button} from "primereact/button";
import {redirect, useRouter} from "next/navigation";
import {InputText} from "primereact/inputtext";
import {useState} from "react";
import {AuthActions} from "@/utils/auth/utils";

const Home = function () {

  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, storeToken } = AuthActions();
  const clickLogin = async () => {
    login(username, password)
      .json((json) => {
        storeToken(json.access, "access");
        storeToken(json.refresh, "refresh");

        router.push("/analytics");
      })
      .catch((err) => {
        console.log("root", { type: "manual", message: err.json.detail });
      });
  };

  return (
    <div className="card w-full h-screen flex align-content-center justify-content-center">
      <div className="flex align-items-center justify-content-center">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-9">
          <div className="text-center mb-5">
            <img src="https://aggregate.digital/v3_images/features/i_charting.svg" alt="hyper" height={50}
                 className="mb-3"/>
            <div className="text-900 text-3xl font-medium mb-3">Добро пожаловать в систему аналитики!</div>
          </div>

          <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Логин</label>
            <InputText value={username} onChange={(e) => setUsername(e.target.value)} id="username" type="text"
                       placeholder="Имя пользователя" className="w-full mb-3"/>

            <label htmlFor="password" className="block text-900 font-medium mb-2">Пароль</label>
            <InputText value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password"
                       placeholder="Пароль" className="w-full mb-3"/>
            <Button label="Войти" icon="pi pi-user" className="w-full" onClick={clickLogin}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;