import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function userType() {
  return (
    <div className="userType">
      <header className="userType-header">
      <div className= "Buttons">
      <Link to ="/login" >
      		<Button> Click for new user </Button>
      	</Link>
       <Link to ="/Menu" >
          <Button> Click to continue </Button>
      </Link>
      </div>
      </header>
    </div>
  );
}

export default userType;
