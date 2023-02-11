import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./LoginForm.css"

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {email:"", password:""}
    }

    updateEmail(e) {
        console.log("Email Updated", e);
        this.setState({email: e.target.value})

    }

    updatePassword(e) {
        this.setState({password: e.target.value})
    }

    onSubmit() {
        console.log({email: this.state.email, password: this.state.password})
    }

    render() {
        return (
            <Form className="loginForm">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(e) => this.updateEmail(e)} value={this.state.email} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => this.updatePassword(e)} value={this.state.password} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button onClick= {() => this.onSubmit()} variant="primary">
                Submit
              </Button>
            </Form>
          );
    }
}

export default LoginForm;