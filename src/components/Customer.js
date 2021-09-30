import React, { Component } from "react";
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
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

class Customer extends Component {
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
        <Card
          className={"border border-dark bg-dark text-white"}
        
        >
          <Card.Header>
            <FontAwesomeIcon icon={faUserPlus} />
          </Card.Header>
          <Card.Body>
          <Card.Title>Customer Form</Card.Title>
            <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter names customer" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Customer Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name customer" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
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

export default Customer;
