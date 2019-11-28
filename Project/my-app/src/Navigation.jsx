import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
//import "./Navigation.css";

const Navigation = ({ history }) => (
  <div>
    {/*variant can only be changed from light,dark,white*/}
    <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Brand href="/">
        Meal Runner
        {
          //<img src={logo} alt="IYC Logo" height="60px" />
        }
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Link eventKey={1} onClick={() => history.push("/Main")}>
            Main
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default withRouter(Navigation);
