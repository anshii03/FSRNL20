import React from "react"
import User from "../User/User"
import "./Users.css"
import Spinner1 from "../Common/Spinner/Spinner1"

class Users extends React.Component {
    constructor() {
        super();
        this.state = {currentValue: 1, isLoading: true, usersData: [], searchValue:""}
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
                this.completeData = users.users;
                this.setState({isLoading: false , usersData: users.users})
            });
    }

    showSpinner() {
        return (
        <Spinner1/>
        )
    }

    filterUsers(e) {
        const value =  e.target.value.toLowerCase();

        this.setState({searchValue: value});

        const filteredData = this.completeData.filter((user) => {
            return user.firstName.toLowerCase().startsWith(value);
        })

        this.setState({usersData: filteredData});

    }

    showUsers() {
        return  (
            <div>
              <h2>This is users component</h2>
             <input onChange={(e) => this.filterUsers(e)} value={this.state.searchValue} type="text"/>
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