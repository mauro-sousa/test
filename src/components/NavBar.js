import React, { Components } from 'react';
import {
  Navbar, Nav, Container, Button
} from 'react-bootstrap';

class NavBar extends Components {
  // continue = e =>{
  //   this.props.nextStep("login")
  // }

  // register = e =>{
  //   this.props.nextStep("register")
  // }

  // contact = e =>{
  //   this.props.nextStep("contact")
  // }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">EDC</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#features" >Contact Us</Nav.Link> */}

                {/* <Nav.Link href="#pricing"></Nav.Link> */}
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
              </Nav>
              <Nav>

                <Button variant="dark" onClick={this.continue}>Login</Button>
                {' '}
                <Button variant="dark" onClick={this.register}>Register</Button>
                {' '}
                <Button variant="dark" onClick={this.contact}>Contact Us</Button>
                {' '}

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
