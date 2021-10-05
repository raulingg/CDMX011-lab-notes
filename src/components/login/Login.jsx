import React, {useContext} from 'react'
import { GoogleLogin } from '../../firebase/Auth.js';

import postit from "../../images/post-it.png";
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const { setUser } = useContext(UserContext);
    const history = useHistory();

    const handleGoogleAuth = () => {
      GoogleLogin()
      .then(({user}) => {
        setUser({
          uid: user.uid,
          name: user.displayName,
          email: user.email
        })
        history.push('/notes')
      });
  }
    
    return (
        <div>
      <img src={postit} alt="post-it" />
      <h1 className="app-name">LABNOTES</h1>
      <form className="form">
        <h3 className="form__header">Iniciar sesión</h3>

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
        <button className="form__button">Ingresar</button>
      </form>
      <button onClick={handleGoogleAuth} className="button">Continuar con google</button>
    </div>
    )
}

export default Login
