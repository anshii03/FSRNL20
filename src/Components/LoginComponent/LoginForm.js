import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./LoginForm.css"
import Spinner from "../Common/Spinner/Spinner1"

let auth = true;

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {email:"", password:"", isLoading: false, showError: false}
    }

    updateEmail(e) {
        this.setState({email: e.target.value})

    }

    updatePassword(e) {
        this.setState({password: e.target.value})
    }


    onLogin(email , password) {

        this.setState({isLoading: true})

        setTimeout(()=>{
            if (auth){
                this.props.onLoginSuccessful();
            } else {
                this.setState({showError: true});     
            }
            this.setState({isLoading: false})        
        }, 5000)

    }

    componentWillMount() {
      console.log("Login Form is going to be mounted");
    }

    componentDidMount() {
      console.log("Login Form has been rendered on DOM");
    }

    componentWillUnmount(){
      console.log("Login Component has been removed on DOM");
    }

    componentDidUpdate() {
      console.log("Login Component Updated");
    }

    render() {
        console.log("Login Form is rendering");
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
              {
                this.state.isLoading ? <Spinner/> : <Button onClick= {() => this.onLogin(this.state.email, this.state.password)} variant="primary">
                Submit
              </Button>
              }
              {
                this.state.showError && <p style={{color:"red"}}>Invalid Credentials</p>
              }
            </Form>
          );
    }
}

export default LoginForm;