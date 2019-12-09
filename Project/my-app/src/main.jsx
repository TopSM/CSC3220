import React from "react";
import "./App.css";

import UserType from "./userType";

function Main() {
  return (
    <div className="userType">
      <h1>Welcome to our site!</h1>
      <header className="userType-header">
        {
          //<Login/>
        }
        <UserType />
      </header>
    </div>
  );
}

export default Main;
