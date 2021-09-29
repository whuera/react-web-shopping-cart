import './App.css';
import React from "react";
import NavigationBar from "./components/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import ListProducts from "./components/ListProducts";
import Footer from "./components/Footer";
import Customer from "./components/Customer";
import ShoppingCart from './components/ShoppingCart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const marginTop = {
        marginTop:"20px",
        marginLeft:"30px"
    };

    return (
        <Router>
            <NavigationBar />
            <container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Switch>
                            <Route path="/" exact component={Welcome} />
                            <Route path="/add-product" exact component={Products} />
                            <Route path="/list-product" exact component={ListProducts} />
                            <Route path="/create-customer" exact component={Customer} />
                            <Route path="/shopping-cart" exact component={ShoppingCart} />
                        </Switch>
                    </Col>
                </Row>

            </container>
            <Footer/>
        </Router>
    );
}

export default App;
