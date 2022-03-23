import React from "react";
import { Button } from "semantic-ui-react";
import "./AuthOptions.scss";

export default function AuthOptions(props) {
  //Prop que nos deja cambiar que formulario queremos recivir
  const { setSelectedForm } = props;

  return (
    <div className="auth-options">
      <h2>Millones de canciones, gratis en MusicXL</h2>
      <Button className="login" onClick={() => setSelectedForm("login")}>
        Iniciar sesion
      </Button>
      <Button className="register" onClick={() => setSelectedForm("register")}>
        Registrarte Gratis
      </Button>
    </div>
  );
}
