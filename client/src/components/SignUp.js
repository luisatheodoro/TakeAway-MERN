import React, { Component } from 'react';
import {Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';


class SignUp extends Component {
  render() {
    return (
        <Container className="App">
          <Form className="form">
            <Col>
              <FormGroup>
                <Label className="name">Name</Label>
                <Input
                    type="name"
                    name="name"
                    placeholder="Name"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                />
              </FormGroup>
            </Col>
            <Button color="dark" style={{marginTop: '2rem'}} block>Sign Up</Button>
          </Form>
        </Container>
    );
  }

}


export default SignUp;