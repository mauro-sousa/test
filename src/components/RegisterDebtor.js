import React, { Components } from 'react';
import {
  Form, Row, Col, Button
} from 'react-bootstrap';
// import Stack from 'react-bootstrap/Stack';

class Register extends Components {
  // register = e =>{
  //     this.props.nextStep("login")
  // }

  render() {
    return (
      <div>
        <div gap={1} className="col-md-6 mx-auto">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridfname">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter first name" onChange={this.props.handleChange('fname')} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridlname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" onChange={this.props.handleChange('lname')} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridIDnum">
                <Form.Label>Identification Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Identification Number" onChange={this.props.handleChange('id')} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridStudentnum">
                <Form.Label>Student Nr</Form.Label>
                <Form.Control type="text" placeholder="Enter Student Number" onChange={this.props.handleChange('student_no')} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridIDnum">
                <Form.Label>Gender</Form.Label>
                <Form.Select name="gender" id="gender" onChange={this.props.handleChange('gender')}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="non-binary">Non-Binary</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridStudentnum">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control type="date" placeholder="DOB" onChange={this.props.handleChange('dob')} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={this.props.handleChange('email')} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Cellphone number</Form.Label>
                <Form.Control type="text" placeholder="Enter your Cellphone number" onChange={this.props.handleChange('cell')} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" onChange={this.props.handleChange('address')} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={this.props.handleChange('city')} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Country</Form.Label>
                <Form.Select defaultValue="Choose..." onChange={this.props.handleChange('country')}>
                  <option>Select Country</option>
                  <option value="Angola">Angola</option>
                  <option value="Namibia">Namibia</option>
                  <option value="SA">South Africa</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                  <option value="Moçambique">Moçambique</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Postal Address</Form.Label>
                <Form.Control onChange={this.props.handleChange('postal')} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.props.handleChange('password')} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter Password" onChange={this.props.handleChange('password2')} />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.register}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;
