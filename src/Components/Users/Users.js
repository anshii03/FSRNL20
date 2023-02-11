import React from "react"
import User from "../User/User"
import "./Users.css"
import Spinner from 'react-bootstrap/Spinner';

class Users extends React.Component {
    constructor() {
        super();
        this.state = {currentValue: 1, isLoading: true, usersData: []}
    }

    incrementValue() {
        console.log("Increment Value Called");

        this.setState({currentValue: this.state.currentValue + 1})
    }

    componentWillMount() {
        console.log("Component will Mount");
    }

    componentDidMount() {
        console.log("Component Did Mount");

        // setTimeout(() =>{
        //     this.setState({isLoading:false})
        // }, 5000)

        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(users => {
                console.log(users)
                this.setState({isLoading: false , usersData: users.users})
            });
    }

    showSpinner() {
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          );
    }

    showUsers() {
        return  (
            <div>
        <h2>This is users component</h2>
        <div className="users">    
            {
                this.state.usersData.map(function (user) {
                    return <User key={user.id} details={user}/>
                }) 
            }
        </div> 
            </div>
        ) 
    }

    render() {
        console.log("Component Rendered");
        return (
            <div>
            {
                // Conditional rendering
                this.state.isLoading ? this.showSpinner() : this.showUsers()
            }
            </div>
        )
          
            {/* <p>Current Value: {this.state.currentValue}</p> */}
            {/* <button onClick={() => this.incrementValue()}>Increment Counter</button> */}

    }
}

// function Users () {
//     return (
//         <div>
//             <h2>This is users component</h2>
//             <div className="users">    
//                 {
//                     data.map(function (user) {
//                         return <User details={user}/>
//                     }) 
//                 }
//             </div>   
//         </div>
        
//     )
// }
   

export default Users