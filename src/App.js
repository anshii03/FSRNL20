import './App.css';
import Users from './Components/Users/Users';
import LoginForm from './Components/LoginComponent/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {isLoggedIn: true}
  }

  onLoginSuccessful(email, password) {
    this.setState({isLoggedIn: true})
  }

  // this leyword

  render() {
    return (
      <div className="App">
          {
            this.state.isLoggedIn ? <Users/> : <LoginForm  onLoginSuccessful={this.onLoginSuccessful.bind(this)}/>
          }
      </div>
    );
  }
}

// function App() {

//   // Array destructuring
//   const [count, setCount] = useState(3);
  
//   return(
//     <div className="hooks">
//       <button className="button" onClick={()=> setCount(count - 1)}>-</button>
//       <span>{count}</span>
//       <button className="button" onClick={()=> setCount(count + 1)}>+</button>
//     </div>
//   )
// }

export default App;


