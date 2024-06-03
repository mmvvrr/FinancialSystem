"use client"

import {Button} from "primereact/button";
import {useRouter} from "next/navigation";
import {InputText} from "primereact/inputtext";
import {useState} from "react";

const Home = function () {

  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const clickLogin = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api-auth/login/`)
    console.log(response);
    // router.push("/");
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