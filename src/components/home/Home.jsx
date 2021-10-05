import React from "react";
import { useHistory } from "react-router-dom";

import "./Home.css";
import postit from "../../images/post-it.png";

const Home = () => {
  const history = useHistory();
  
  function handlePath(path) {
    history.push(path);
  }
  return (
    <div className="home-container">
      <img src={postit} alt="post-it" />
      <h1 className="app-name">LABNOTES</h1>
      <button onClick={()=>{handlePath('/login')}} className="button button--login">Iniciar sesión</button>
      <button onClick={()=>{handlePath('/signup')}} className="button button--signIn">Regístrarme</button>
    </div>
  );
};

export default Home;
