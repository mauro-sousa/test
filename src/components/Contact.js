import React, { Component } from 'react';
import {
  Form, Row, Col, Button
} from 'react-bootstrap';
// import Stack from 'react-bootstrap/Stack';

class Contact extends Component {
  render() {
    return (
      <div>
        <div gap={1} className="col-md-6 mx-auto">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                <Form.Label>Cellphone number</Form.Label>
                <Form.Control type="text" placeholder="Enter your cellphone number start with area code (e.g +264)" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter reason for reaching" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Leave us a message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.register}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
