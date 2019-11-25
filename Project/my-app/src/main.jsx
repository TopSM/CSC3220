import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import UserType from "./userType";
import Login from "./login";

function Main() {
  return (
    <div className="userType">
    <h1>Welcome to our site!</h1>
      <header className="userType-header">
        {//<Login/>
        }<UserType/>
      </header>
    </div>
  );
}

export default Main;
