import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



function foodItems(ItemName, Price,){
	this.ItemName = ItemName;
	this.Price= Price; 
}

function Menu() {
  return (
    <div className="userType">
    <h1>What would you like to order?</h1>
      <header className="userType-header">
      </header>
    </div>
  );
}

export default Menu;
