import React from "react"
import { useEffect, useState, useRef} from 'react';
import User from "../User/User"
import "./Users.css"
import Spinner1 from "../Common/Spinner/Spinner1"
import UserModal from "../User/UserModal/UserModal"

function Users () {

    var completeData = useRef(null); 
    var id = useRef(null);

     const [isLoading, changeIsLoading] = useState(true)
     const [usersData, setUsersData] = useState(null)
     const [showModal, setModal] = useState(false)
     const [searchValue, setSearchValue] = useState("")

     function showSpinner() {
        return (
        <Spinner1/>
        )
    }

    function showUsers() {
        return  (
            <div>
              <h2>This is users component</h2>
             <input onChange={(e) => filterUsers(e)} value={searchValue} type="text"/>
                <div className="users">    
                    {
                        usersData.map((user) => {
                            return <User key={user.id} details={user} openModal={openModal}/>
                        }) 
                    }
                </div> 
            </div>
        ) 
    }

    function filterUsers(e) {
        const value =  e.target.value.toLowerCase();

        setSearchValue(value);

        const filteredData = completeData.current.filter((user) => {
            return user.firstName.toLowerCase().startsWith(value);
        })

        setUsersData(filteredData)

    }

    function openModal(_id) {
        id.current = _id;
        setModal(true);
    }

    function closeModal() {
        setModal(false);
    }


     useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(users => {
            completeData.current = users.users;
            changeIsLoading(false);
            setUsersData(users.users);
        });
     }, [])

    return (
        <div>
        {
            isLoading ? showSpinner() : showUsers()
         
        }
        { showModal &&  <UserModal id={id.current} closeModal={closeModal}/> }
       
        </div>
    )
}

// class Users extends React.Component {
//     constructor() {
//         super();
//         this.state = {currentValue: 1, isLoading: true, usersData: [], searchValue:"", showModal: false}
//     }

//     incrementValue() {
//         console.log("Increment Value Called");

//         this.setState({currentValue: this.state.currentValue + 1})
//     }

//     componentWillMount() {
//         console.log("Users Component will Mount");
//     }

//     componentDidMount() {
//         console.log("Users Component Did Mount");

//         // setTimeout(() =>{
//         //     this.setState({isLoading:false})
//         // }, 5000)

//         fetch('https://dummyjson.com/users')
//             .then(res => res.json())
//             .then(users => {
//                 console.log(users)
//                 this.completeData = users.users;
//                 this.setState({isLoading: false , usersData: users.users})
//             });
//     }

//     componentDidUpdate() {
//         console.log("Users Component has been updated")
//     }

//     componentWillUnmount() {
//         console.log("Users Component will unmount");
//     }

//     showSpinner() {
//         return (
//         <Spinner1/>
//         )
//     }

//     openModal(id) {
//         this.id = id;
//         this.setState({showModal: true})
//     }

//     closeModal() {
//         this.setState({showModal: false})
//     }

//     filterUsers(e) {
//         const value =  e.target.value.toLowerCase();

//         this.setState({searchValue: value});

//         const filteredData = this.completeData.filter((user) => {
//             return user.firstName.toLowerCase().startsWith(value);
//         })

//         this.setState({usersData: filteredData});

//     }

//     showUsers() {
//         return  (
//             <div>
//               <h2>This is users component</h2>
//              <input onChange={(e) => this.filterUsers(e)} value={this.state.searchValue} type="text"/>
//                 <div className="users">    
//                     {
//                         this.state.usersData.map((user) => {
//                             return <User key={user.id} details={user} openModal={this.openModal.bind(this)}/>
//                         }) 
//                     }
//                 </div> 
//             </div>
//         ) 
//     }

//     render() {
//         return (
//             <div>
//             {
//                 // Conditional rendering
//                 this.state.isLoading ? this.showSpinner() : this.showUsers()
             
//             }
//             {   this.state.showModal &&  <UserModal id={this.id} data={this.userData} closeModal={this.closeModal.bind(this)}/> }
           
//             </div>
//         )
          
//             {/* <p>Current Value: {this.state.currentValue}</p> */}
//             {/* <button onClick={() => this.incrementValue()}>Increment Counter</button> */}

//     }
// }

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