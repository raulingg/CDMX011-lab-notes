import React, { useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";

import Login from "./components/login/Login";
import Notes from "./components/notes/Notes";
import SignUp from "./components/sign-up/SignUp";
import { UserContext } from './context/UserContext';

function App() {
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value= {{user, setUser}}>
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/notes" component={Notes} />
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
