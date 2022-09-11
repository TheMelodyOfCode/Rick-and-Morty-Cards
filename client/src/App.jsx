
/* This is needed to be able to use the functionality of classes in REACT */
import { Component } from "react";
import React from "react";
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from "./components/search-box/search-box.component.jsx";
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
/* we store the searchField value in our state so that we have access to it,
in the whole component */
        searchField: ''
      }
      console.log('NO:1 - constructor()')
    }
    


    componentDidMount(){
      console.log('NO:3 - componendDidMount()')

      // fetch('https://jsonplaceholder.typicode.com/users')
      fetch('http://localhost:3001/allDBUsers')
      .then((response)=> {
            // console.log(response);
            return response.json();
          })
          .then((users=> {
            // console.log(users);
            /* when setState get's called , render gets called again veverytime! */
            this.setState((probs)=>{
                  return {users: users}
                },
          ()=>{console.log(this.setState)}
          )

      }
));
    }
/* this was an anonymous function before running in render, 
changed that for optimization, so it don't get run everytime react updates the DOM */
      onSearchChange = (event)=>{
        console.log(event.target.value);
        const searchField = event.target.value.toLocaleLowerCase();
   /* when setState get's called , render gets called again veverytime! */
        this.setState(()=>{
          return { searchField}
        })
      }

/* everytime react needs to update the DOM , it runs the render method.
It is best practise to try to avoid anonymous functions, since they run (get initialized) everytime,
instead of when called */
      render() {
        console.log('NO:2 - render()');

/* instead of calling THIS everywhere & this.state for users and searchField
we can use destructuring in ES6. It make variables look shorter and the code easier to read. */
        const  { users, searchField} = this.state;
        const {onSearchChange} = this;

//filter creates a new array - the old array is untouched
        const filteredUsers = users.filter((users)=>{
          return users.username.toLocaleLowerCase().includes(searchField);
        });



    return (
          <div className="App">

            <SearchBox  
                        className='users-search-box'
                        onChangeHandler={onSearchChange} 
                        placeholder='Search Users' />

              {/* <input  className="search-box" 
                      type='search' 
                      placeholder="Search Users" 
                      onChange={ onSearchChange } 
              /> */}
              {/* {filteredUsers.map((user) => {
                return (
                  <div key={user.userid}>  
                      <img className="image" src={`./img/${user.photo}`}  alt={user.username} />
                          <div>{user.username} </div>
                          <div>{user.bio} </div>
                      </div>
                )
              })} */}

              {/* Components need to be CAPITALIZED */}
              <CardList users={filteredUsers}/>
        </div>
        );
  }

}


export default App;

