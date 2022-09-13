
import { useState, useEffect } from "react";

import React from "react";
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from "./components/search-box/search-box.component.jsx";
import './App.css';


const App = () => {

    const [searchField, setSearchField] = useState(''); // [value, setValue]
    const [users, setUsers] = useState([]); // [value, setValue]

    useEffect(()=>{
      fetch('http://localhost:3001/allDBUsers')
      .then((response)=> { return response.json();})
      .then((users=> { setUsers(users);}));
    },[])

    const onSearchChange = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

    const filteredUsers = users.filter((users)=>{
    return users.username.toLocaleLowerCase().includes(searchField);
  });



  return (
    <div className="App">
     <h1 className='app-title'>Rick and Morty </h1>
      <SearchBox  
                  className='users-search-box'
                  onChangeHandler={onSearchChange} 
                  placeholder='Search Users' />

        <CardList users={filteredUsers}/>
  </div>
  );


}

export default App;


