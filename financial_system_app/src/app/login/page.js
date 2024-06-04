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
      <div className="flex flex-column md:flex-row">
        <div className="w-full md:w-6 flex flex-column align-items-center justify-content-center gap-3 py-5">
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Логин</label>
            <InputText value={username} onChange={(e) => setUsername(e.target.value)} id="username" type="text" className="w-12rem"/>
          </div>
          <div className="flex flex-wrap justify-content-center align-items-center gap-2">
            <label className="w-6rem">Пароль</label>
            <InputText value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" className="w-12rem"/>
          </div>
          <Button label="Войти" icon="pi pi-user" className="w-10rem mx-auto" onClick={clickLogin}></Button>
        </div>
      </div>
    </div>
  )
}

export default Home;