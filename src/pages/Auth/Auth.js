import React, { useState } from "react";
//Importacion de los componentes que vamos a usar
import AuthOptions from "../../components/Auth/AuthOptions";
import LoginForm from "../../components/Auth/LoginForm";
import RegisterForm from "../../components/Auth/RegisterForm";
//Importacion de las imagenes
import BackgroundAuth from "../../assets/jpg/background-auth.jpg";
import LogoNameWith from "../../assets/png/logo-name-white.png";

import "./Auth.scss";

export default function Auth() {
  //Estado que nos permite manejar que formulario queremos recbir
  //segun los casos del swich
  const [selectedForm, setSelectedForm] = useState(null);

  //Funcion de manejo de los forms que se van a usar a travez de un
  // swich
  const handlerForm = () => {
    switch (selectedForm) {
      case "login":
        return <LoginForm />;
      case "register":
        return <RegisterForm setSelectedForm={setSelectedForm} />;
      default:
        return <AuthOptions setSelectedForm={setSelectedForm} />;
    }
  };

  return (
    <div className="auth" style={{ backgroundImage: `url(${BackgroundAuth})` }}>
      <div className="auth__dark" />
      <div className="auth__box">
        <div className="auth__box-logo">
          <img src={LogoNameWith} alt="MusicXL" />
        </div>
        {handlerForm()}
      </div>
    </div>
  );
}
