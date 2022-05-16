import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./signup_login/login_container"
import Signup from "./signup_login/signup_container";
import Index from "./index";

const App = () => {
  return (
  <div>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/" component={Index}/>
    </Switch>
  </div>
  )
};

export default App;