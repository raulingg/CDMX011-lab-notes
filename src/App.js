import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Notes from "./components/notes/Notes";
import SignUp from "./components/sign-up/SignUp";
import { auth } from "./firebase/firebase-config";

function App() {

  const [ user, setUser ] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user?.uid) {
        setUser({
          uid: user.uid,
          name: user.displayName,
          email: user.email
        })
      }
    })
  }, [])
  
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser}/>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/notes">
          <Notes user={user}/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
