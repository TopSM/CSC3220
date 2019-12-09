import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Component } from "react";

const myItems = [
  {
    id: 0,
    name: "Burger",
    price: 12
  },
  {
    id: 1,
    name: "Pizza",
    price: 5
  },
  {
    id: 2,
    name: "Tacos",
    price: 3
  },
  {
    id: 3,
    name: "Juice",
    price: 4
  },
  {
    id: 4,
    name: "Water Bottle",
    price: 1.5
  }
];

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  retCart = nCart => {
    for (var i = 0; i < this.state.cart.length; i++) {
      document.write(nCart[i].name);
      //  nCart[i].price;
    }
  };

  finalTotal = nCart => {
    var totalPrice = 0;
    for (var i = 0; i < this.state.cart.length; i++) {
      totalPrice += nCart[i].price;
    }
    //console.log(totalPrice);
    return totalPrice;
  };
  //  document.getElementById("demo").innerHTML = cars[0];

  onClick = item => {
    this.setState({ cart: [...this.state.cart, item] });
  };

  render() {
    //console.log(this.retCart(this.state.cart));
    //console.log(this.state.cart);
    return (
      <div className="userType">
        <h1>What would you like to order?</h1>

        <header className="userType-header">
          <div className="moodList">
            <ul className="menuList">
              {myItems.map(item => (
                <li className="foodItem">
                  <Button onClick={() => this.onClick(item)}>
                    {`${item.name}    $${item.price}`}
                  </Button>
                </li>
              ))}
            </ul>
            <h3>Your Cart</h3>
            <script>{this.finalTotal(this.state.cart)}</script>
            <Link to="/yourCart">
              <button>Cart</button>
            </Link>
            <p> </p>
          </div>
        </header>
      </div>
    );
  }
}

export default Menu;
