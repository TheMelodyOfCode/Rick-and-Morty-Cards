
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
        users: [ ],
        /* best practise:
        if you're going to modify any kind of data inside of your state, as example, filtering it out 
        based on userinput or whatever. if you gonna go back to it and most of the time you want that.
         at least keep some referenz to that original list */
        searchField: ''
      }
      console.log('NO:1 - constructor()')
    }
    


    componentDidMount(){
      console.log('NO:3 - componendDidMount()')

      // fetch('https://jsonplaceholder.typicode.com/users')
      fetch('http://localhost:3001/allDBUsers', 
      // {
      //   method: 'GET', // *GET, POST, PUT, DELETE, etc.
      //   mode: 'cors', // no-cors, *cors, same-origin
      //   // // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   // credentials: 'include', // include, *same-origin, omit
      //   header: {
      //     'Content-Type': 'application/json',
      //     "Access-Control-Allow-Origin" : "*", 
      //     // "Access-Control-Allow-Credentials" : true
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   // redirect: 'follow', // manual, *follow, error
      //   // // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // }
      )
      .then((response)=> {
        // console.log(response);
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
   //filter creates a new array - the old array is untouched
    const filteredUsers = this.state.users.filter((users)=>{
      return users.username.toLocaleLowerCase().includes(this.state.searchField);
    });



    return (
          <div className="App">
              <input  className="search-box" 
                      type='search' 
                      placeholder="Search Users" 
                      onChange={(event)=>{
                    console.log(event.target.value);
                    const searchField = event.target.value.toLocaleLowerCase();
  

                    this.setState(()=>{
                      return { searchField}
                    })
              }} 
              />
              {filteredUsers.map((user) => {
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

