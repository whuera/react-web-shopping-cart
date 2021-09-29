import React, { Component } from 'react';
import {Row} from "react-bootstrap";


class Welcome extends Component {
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
      <div className="text-white">
        <h1>Shopping Cart Demo</h1>
        <p>
          Shopping-cart Demo, is project based in spring boot framework for backed and rect library for frontend
        </p>
      </div>
    );
  }
}

export default Welcome;