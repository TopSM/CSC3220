import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
//import "./Navigation.css";

const Navigation = ({ history }) => (
  <div>
    {/*variant can only be changed from light,dark,white*/}
    <Navbar className="custom-nav" variant="dark" /*bg="warning" expand="lg"*/>
      <Navbar.Brand href="#home">
        <Link to="/">
          {//<img src={logo} alt="IYC Logo" height="60px" />
        }</Link>
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