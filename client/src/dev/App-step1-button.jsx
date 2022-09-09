
/* This is needed to be able to use the functionality of classes in REACT */
import { Component } from "react";
// import { useEffect, useState } from "react";
import React from "react";
import logo from './logo.svg';
import './App.css';


class App extends Component {

    constructor() {
      // super calls the constructor of any other class this calls extends from
      super();

      /* The way that REACT detects that there is a change, is that it uses 
      JavaScripts underlying reference by memory for an object.
      The object in memory has to be a completely different one otherwise React
      will not change it. to change that react has the method setState */
      this.state = {
        name: { firstname: 'Jerry', lastname: 'Smith'},
        company: ' low-level advertising agency until he was fired for incompetence'
      }

    }

      /* When we give setState a simple object, it  will shallow merge it with the current state object.
  shallow merge means that it updates the matching keys with the new value
  Since setState is an asynchrones function it won't update this.state immediatelly.
  To have the changes right now (sync )and not async, we can pass setState 
  2 (arguments) functions if we want - they are optional.
  The first function is an update function that will shallow merge 
  and the second is a callback function that gives us back whatever we write innit
  after the first function has been finished*/


  render() {
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                {this.state.name.firstname} {this.state.name.lastname}, worked at a {this.state.company}   
              </p>
              <button onClick={()=> {

                  // state is equal to the current state
                  // probs is different values you can pass to a component
                  this.setState( (state, props)=>{
                    return {
                      name: {firstname: 'Rick', lastname: 'Sanchez'}
                    }
                    // this callback only runs after the state changes have been applied
                  }, ()=>{
                        console.log(this.state);
                  }
                
                );



              }}>Change Name</button>

            </header>
          </div>
        );
  }

}


export default App;

