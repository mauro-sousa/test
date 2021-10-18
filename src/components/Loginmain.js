import React, { Components } from 'react';
import { Form, Button } from 'react-bootstrap';
// import * as Realm from 'realm-web';
// import Stack from 'react-bootstrap/Stack';

// const REALM_APP_ID = 'collector-nbtcn';
// const app = new Realm.App({ id: REALM_APP_ID });

class Login extends Components {
  // login = e =>{
  //     console.log(app.logIn(Realm.Credentials.emailPassword(this.props.email, this.props.password)))
  //     this.props.nextStep("home")
  // }

  render() {
    return (
      <div>
        <div gap={2} className="col-md-2 mx-auto">
          <Form>
            <Form.Group className="mb-3" controlI d="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={this.props.handleChange('email')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.props.handleChange('password')} />
            </Form.Group>
            <Button className="login" variant="primary" type="submit" onClick={this.login}>Login</Button>
          </Form>
        </div>

      </div>
    );
  }
}

export default Login;
