import './App.css';
import Users from './Components/Users/Users';
import LoginForm from './Components/LoginComponent/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {isLoggedIn: false}
  }
  render() {
    return (
      <div className="App">
          {
            this.state.isLoggedIn ? <Users/> : <LoginForm/>
          }
      </div>
    );
  }
}

export default App;
