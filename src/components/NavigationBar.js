import React, { Component } from 'react';
import {Nav, Navbar, NavLink} from "react-bootstrap";
import { Link } from "react-router-dom";


class NavigationBar extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Link to={"add-product"} className="nav-link">Add Product</Link>
            <Link to={"create-customer"} className="nav-link">Create Customer</Link>
            <Link to={"shopping-cart"} className="nav-link">Shopping Cart</Link>
          </Nav>
        </Navbar>
    );
  }
}

export default NavigationBar;