import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from'react';
import SearchBar from './components/SearchBar';
import AddProblem from './components/AddProblem';
import DisplayProblem from './components/DisplayProblem';
import Button from '@mui/material/Button';


function App() {
  // set state for data and filters.
   const [filters, setFilters] = useState("");
   const [data, setData] = useState({items: []});

   
   const updateSearch = (params) => {
    setFilters(params);
   }
   // function adds a newly created problem to the list of problems.
   const addProblemToData = (params) => {
      let currentItems = data["items"]
      params.id = params.length;
      currentItems.push(params);
      setData({items: currentItems});
      // there will exist no filters.
      setFilters("");
      
      
   }

  return (
    <div className="App">
      
      
      <p><b>Add a Problem</b></p>
      <AddProblem addProblemCallback={addProblemToData}/>

      <SearchBar callback={updateSearch}/>
      <DisplayProblem info={data.items} filters={filters}/>
      
      
    </div>
  );
}





export default App;
