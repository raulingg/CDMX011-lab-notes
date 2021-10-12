import React, {useState} from 'react'
import { emailLogin, GoogleLogin } from '../../firebase/Auth.js';

import postit from "../../images/post-it.png";
import { useHistory } from 'react-router-dom';

const Login = ({setUser}) => {

  const initialInputs = {
    email: '',
    password: ''
}

const handleOnChange = (e) => {
  const { id, value } = e.target
  const newObject = { ...inputs, [id]: value }
  setInputs(newObject)
}

const handleSubmit = (e) => {
  console.log(inputs.email)
  e.preventDefault();
  emailLogin(inputs.email, inputs.password)
  .then((user) => console.log("Login exitoso"))
}

const [inputs, setInputs] = useState(initialInputs)
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
      <form className="form" onSubmit = {handleSubmit}>
        <h3 className="form__header">Iniciar sesión</h3>
        <label htmlFor="userEmail">Correo</label>
        <input
          onChange={handleOnChange}
          id="email"
          type="email"
          value={inputs.email}
          name="userEmail"
          placeholder="Ingresa tu Email"
          className="form__input"
        ></input>
        <label htmlFor="userPassword">Contraseña</label>
        <input
          onChange={handleOnChange}
          id="password"
          type="password"
          value={inputs.password}
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
