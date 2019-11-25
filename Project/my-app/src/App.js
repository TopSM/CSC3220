import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navigation from './Navigation';
import Routes from './Routes';
import Login from "./login";
import UserType from "./userType";

class App extends Component{
  render(){
    return(
    <div className="App">
       <Navigation/>
       <Routes/>    
    </div>
    );
  }
}

export default App;
