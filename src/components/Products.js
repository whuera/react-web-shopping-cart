import React, { Component } from 'react';
import {
  Card,
  Form,
  Button,
  Col,
  Row,
  InputGroup,
  Image,
  Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faPlusSquare,
  faUndo,
  faList,
  faEdit,
  faUserPlus,
  faShoppingBasket
} from "@fortawesome/free-solid-svg-icons";


class Products extends Component {
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
      <Container>
        <div className="text-white">
          <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </Card.Header>
            <Card.Body>
              <Card.Title>Product Form</Card.Title>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter names customer"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name customer"
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Category</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Pictures</option>
                    <option value="2">Shoes</option>
                    <option value="3">Tools</option>
                  </Form.Select>
                </Form.Group>
                
                <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formGridAddress2" as={Col}>
                  <Form.Label>Price</Form.Label>
                  <Form.Control placeholder="Enter price product" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress2" as={Col}>
                  <Form.Label>Stock</Form.Label>
                  <Form.Control placeholder="Enter stock product" />
                </Form.Group>
                </Row>
               

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Have discount" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
}

export default Products;