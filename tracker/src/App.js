import logo from './logo.svg';
import './App.css';
import React from 'react';
import Comp1 from './components/comp1';
import { useState } from'react';
import SearchBar from './components/SearchBar';
import AddProblem from './components/AddProblem';
import DisplayProblem from './components/DisplayProblem';



function App() {
   const [filters, setFilters] = useState({});
   const [data, setData] = useState({items: []});

   const updateSearch = (params) => {
    console.log(params);
    setFilters(params);
   }

   const addProblemToData = (params) => {
      let currentItems = data["items"]
      params.id = params.length;
      currentItems.push(params);
      setData({items: currentItems});
      
      console.log(data);
   }

  return (
    <div className="App">
      
      
      <p><b>Add a Problem</b></p>
      <AddProblem addProblemCallback={addProblemToData}/>
      <SearchBar callback={updateSearch}/>
      <DisplayProblem info={data.items}/>
      
      
    </div>
  );
}

export default App;
