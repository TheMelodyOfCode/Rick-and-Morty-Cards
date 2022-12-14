
/* This is needed to be able to use the functionality of classes in REACT */
import { Component } from "react";
// import { useEffect, useState } from "react";
import React from "react";

import './App.css';


class App extends Component {

    constructor(props) {
      // super calls the constructor of any other class this calls extends from
      super(props);
      /* The way that REACT detects that there is a change, is that it uses 
      JavaScripts underlying reference by memory for an object.
      The object in memory has to be a completely different one otherwise React
      will not change it. to change that react has the method setState */

      // when do i get the list, how do i get the list , where do i put the list
      this.state = {      
        users: []
      }
      console.log('NO:1 - constructor()')
    }
    
    componentDidMount(){
      console.log('NO:3 - componendDidMount()')
      // fetch('https://jsonplaceholder.typicode.com/users')
      fetch('http://localhost:3001/allDBUsers')
      .then((response)=> {
        console.log(response);
        return response.json();
      })
      .then((users=> {
        console.log(users);
        this.setState((probs)=>{
              return {users: users}
            },
      ()=>{console.log(this.setState)}
      )

      }
));
  console.log(this.state.users);
    }


  render() {
    console.log('NO:2 - render()');
    // console.log(this.state.users);
    return (
          <div className="App">
              <input  className="search-box" 
                      type='search' 
                      placeholder="Search Users" 
                      onChange={(event)=>{
                    console.log(event.target.value);
                    const searchString = event.target.value.toLocaleLowerCase();
                    //filter creates a new array - the old array is untouched
                    const filteredUsers = this.state.users.filter((users)=>{
                      return users.username.toLocaleLowerCase().includes(searchString);
                    });
                    this.setState(()=>{
                      return { users: filteredUsers}
                    })
              }} 
              />
              {this.state.users.map((user) => {
                return (
                  <div key={user.userid}>  
                      <img className="image" src={`./img/${user.photo}`}  alt={user.username} />
                          <div>{user.username} </div>
                          <div>{user.bio} </div>
                      </div>
                )
              })}
    
        </div>
        );
  }

}


export default App;

