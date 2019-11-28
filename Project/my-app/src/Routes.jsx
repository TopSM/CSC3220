import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import UserType from "./userType";
import Login from "./login";
import Main from "./main";
import Menu from "./Menu";
import Cart from "./Cart";
import ManagerSide from "./managerSide/ManagerSide";

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/userType" component={UserType} />
    <Route path="/login" component={Login} />
    <Route path="/menu" component={Menu} />
    <Route path="/yourCart" component={Cart} />
    <Route path="/manager" component={ManagerSide} />
  </Switch>
);
