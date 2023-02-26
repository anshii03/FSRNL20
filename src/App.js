import './App.css';
import Users from './Components/Users/Users';
import LoginForm from './Components/LoginComponent/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {isLoggedIn: true}
  }

  onLoginSuccessful(email, password) {
    this.setState({isLoggedIn: true})
  }

  // this keyword

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

// function countValue() {
//   console.log("render");
//   return 3;
// }

// function App() {

//   // Array destructuring
//   const [state, setState] = useState({count: 4, theme: "red"});

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);



//   const count = state.count;
//   const theme = state.theme;
//  // const [theme, setTheme] = useState("red");

//   function onDecrement() {
//     //  setCount(count => count - 1);
//     //  setCount(count => count- 1);

//     setState(prev => {
//       return ({...prev, count: prev.count -1 })
//     })
//   }

// function updateWindowWidth() {
//   setWindowWidth(window.innerWidth)
// }


  // run on both mounting and updating
  // useEffect(() => {
  //  // console.log("Count is updating")
  //   //document.title = `You clicked ${count} times`

  //   window.addEventListener('resize', updateWindowWidth)

//     return() => {
//       window.removeEventListener('resize', updateWindowWidth)
//     }
//   })

//   function onIncrement() {
//     // setCount(next => next + 1);
//     // setTheme("blue")
//   }
  
//   return(
//     <div className="hooks">
//       <p>Window Width: {windowWidth}</p>
//       <button className="button" onClick={onDecrement}>-</button>
//       <span>{count}</span>
//       <span>{theme}</span>
//       <button className="button" onClick={onIncrement}>+</button>
//     </div>
//   )
// }

export default App;


