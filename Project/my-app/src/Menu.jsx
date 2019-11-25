import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {Component} from 'react';

class Menu extends Component {

	constructor(props,ItemName, Price){
		super(props);
		this.ItemName = ItemName;
		this.Price= Price;
	}

render(){
  return (
    <div className="userType">
    <h1>What would you like to order?</h1>


      <header className="userType-header">
     	<div className="moodList">
     	<ul className="menuList">
     		<li className="foodItem">
     		<Button>
     		Burger
     		</Button>
     		</li>

     		<li className="foodItem">
     		<Button>
     		Pizza
     		</Button>
     		</li>

     		<li className="foodItem">
     		<Button>
     		Mac and Cheese
     		</Button>
     		</li>

     		<li className="foodItem">
     		<Button>
     		Water
     		</Button>     		
     		</li>
     	</ul>
     	<h3>Your Cart</h3>
     	<Link to= "/yourCart">
     		<button>
     			Cart	
     		</button>
     	</Link>
     	</div>
      </header>
    </div>
  );
	}

}
const Item = new Menu('Item 1', 10);
//const Item2 = new Menu('Item 2', 7);
//const Item3 = new Menu('Item 3', 8);
//const Item4 = new Menu('Item 4',9);


export default Menu;
