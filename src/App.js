import React, { useState } from "react";
import firebase from "./utils/Firebase";
import "firebase/compat/auth";
import Auth from "./pages/Auth";

function App() {
  /*
    Estados donde vemos si el usuario esta logeado o no
    y si esta cargando la home page o no 
  */
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Deteccion de si el usuario esta logeado o no
  firebase.auth().onAuthStateChanged((currentUser) => {
    if (!currentUser) {
      setUser(null);
    } else {
      setUser(currentUser);
    }
    setLoading(false);
  });

  if (loading) {
    return null;
  }
  //Si el usuario esta logeado muestereme UserLogged de lo contrario
  //vaya a la Autenticacion.
  return !user ? <Auth /> : <UserLogged />;
}

//Componente interno para usuarios logeados

function UserLogged() {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>Usuario logeado</h1>
      <button onClick={logout}>Cerrar sesion</button>
    </div>
  );
}

export default App;
