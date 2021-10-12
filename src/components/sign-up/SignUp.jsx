import React, {useState} from "react";
import { createUsser } from "../../firebase/Auth";
import postit from "../../images/post-it.png";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    createUsser(email, password).then((userCredential) => {
      // Signed in
      console.log(userCredential);
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`oh no! ${errorMessage}`);
      console.log(errorCode);
      // ..
    });
  }

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
        onChange={(e) => { setEmail(e.target.value) }}
          name="userEmail"
          placeholder="Ingresa tu Email"
          className="form__input"
        ></input>
        <label htmlFor="userPassword">Crea una contraseña</label>
        <input
         onChange={(e) => { setPassword(e.target.value) }}
          name="userPassword"
          placeholder="Ingresa tu contraseña"
          className="form__input"
        ></input>
        <button className="form__button" onClick={handleRegister}>Regístrarme</button>
      </form>
    </div>
  );
};

export default SignUp;
