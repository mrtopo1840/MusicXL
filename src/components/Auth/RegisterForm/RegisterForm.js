import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import { validateEmail } from "../../../utils/Validation";
import firebase from "../../../utils/Firebase";
import "firebase/compat/auth";

import "./RegisterForm.scss";

export default function RegisterForm(props) {
  //Prop que recive la funcion del formulario seleccionado,
  //esto nos permite movernos dentro de las page
  const { setSelectedForm } = props;
  //Estado que almacena los dato de cada usuario que ingrese
  //los valores
  const [formData, setFormData] = useState(defaultValueForm());
  //Estado que nos permite tener el control para mostrar la contrasena
  const [showPassword, setShowPassword] = useState(false);
  //Estado que nos permite manejar los errores en el formulairo
  const [formError, setFormError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //Maneja el cambio si se muestra la constrasena o no
  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };
  //Captura todos los elementos que escribimos en los
  //formularios
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  //Envia el formulario
  const onSubmit = () => {
    setFormError({});
    let errors = {};
    let formOk = true;

    //Valida si el e-mail es valido
    if (!validateEmail(formData.email)) {
      errors.email = true;
      formOk = false;
    }
    //Valida si la password es menor a 6 caracteres
    //si no lo es no es validad
    if (formData.password.length < 6) {
      errors.password = true;
      formOk = false;
    }
    //Valida si hay un user name
    if (!formData.username) {
      errors.username = true;
      formOk = false;
    }

    setFormError(errors);
    if (formOk) {
      console.log("Formulario valido");
    }
  };

  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cuenta de MusicXL gratis.</h1>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo electronico"
            icon="mail outline"
            error={formError.email}
          />

          {formError.email && (
            //Si existe un error en el email nos muestra el texto
            <span className="error-text">
              Por favor, ingrese un correo electronico valido.
            </span>
          )}
        </Form.Field>
        <Form.Field>
          <Input
            //Si showPassword es false no muestra la contrasena
            //de lo contrario la muestra
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            error={formError.password}
            icon={
              //Si es true muestra el ojo tachado
              //de lo contrario muestra el ojo normal
              //para ver la contrasena
              showPassword ? (
                <Icon
                  name="eye slash outline"
                  link
                  onClick={handlerShowPassword}
                />
              ) : (
                <Icon name="eye" link onClick={handlerShowPassword} />
              )
            }
          />
          {formError.password && (
            //Si existe un error en la password nos muestra el texto
            <span className="error-text">
              Por favor, ingrese un contraseña superior a 5 caracteres.
            </span>
          )}
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            name="username"
            placeholder="Como deberiamos llamarte?"
            icon="user circle outline"
            error={formError.username}
          />
          {formError.username && (
            //Si existe un error en el user name nos muestra el texto
            <span className="error-text">Por favor, introduce un usuario.</span>
          )}
        </Form.Field>
        <Button type="submit">Continuar</Button>
      </Form>
      <div className="register-form__options">
        <p onClick={() => setSelectedForm(null)}>Volver</p>
        <p>
          Ya tienes MusicXL?
          <span onClick={() => setSelectedForm("login")}>Iniciar sesion</span>
        </p>
      </div>
    </div>
  );
}

//Retorna el valor por defecto de un formulario
function defaultValueForm() {
  return {
    email: "",
    password: "",
    username: "",
  };
}
