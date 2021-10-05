import React from "react";
import postit from "../../images/post-it.png";

const SignUp = () => {
  return (
    <div>
      <img src={postit} alt="post-it" />
      <h1 className="app-name">LABNOTES</h1>
      <form className="form">
        <h3 className="form__header">Regístrate</h3>
        <label htmlFor="userName">Nombre de usuario</label>
        <input
          name="userName"
          placeholder="Ingresa tu nombre de usuario"
          className="form__input"
        ></input>
        <label htmlFor="userEmail">Correo</label>
        <input
          name="userEmail"
          placeholder="Ingresa tu Email"
          className="form__input"
        ></input>
        <label htmlFor="userPassword">Crea una contraseña</label>
        <input
          name="userPassword"
          placeholder="Ingresa tu contraseña"
          className="form__input"
        ></input>
        <button className="form__button">Regístrarme</button>
      </form>
    </div>
  );
};

export default SignUp;
