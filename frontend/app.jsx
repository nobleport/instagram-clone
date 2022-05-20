import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/signup_login/login_container"
import Signup from "./components/signup_login/signup_container";
import Index from "./components/feed/index_container";
import Show from "./components/users/show_container"
import { ProtectedRoute } from "./util/route_util";
import { AuthRoute } from "./util/route_util";

const App = () => {
  return (
  <div className="main-div">
    
    <Switch>
      <AuthRoute path="/login" component={Login}/>
      <AuthRoute path="/signup" component={Signup}/>
      <Route path='/users/:userId' component={Show}/>
      <ProtectedRoute path="/" component={Index}/>
    </Switch>
  </div>
  )
};

export default App;