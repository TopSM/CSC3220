import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';


import UserType from "./userType";
import Login from "./login";
import Main from "./main";
import Menu from "./Menu";

export default () => (
  <Switch>
    <Route exact path="/" component={Main}/>
    <Route path="/userType" component={UserType} />
    <Route path="/login" component={Login}/>
    <Route path="/menu" component={Menu}/>

  </Switch>
);
