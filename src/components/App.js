import React from "react";
import Form from "./Form";
import Header from "./Header";
import Table from "./Table";
import Search from "./Search";
import { useState } from "react";
import { useEffect } from "react";

import '../App.css';

function App() {
  const [transactions, setTransaction] =useState([])
  const [search, setSearch] = useState([])
   useEffect(() => {
    fetch('http://localhost:3000/transactions')
   .then(response => response.json())
   .then(data => {
    setTransaction(data)
    setSearch(data)
   })
 

   }, [])


   function handleSearch(e){
    setTransaction(search.filter(transactions => {
      return (transactions.description.toLowerCase().includes(e.target.value))
    }))
      return transactions
   }








  return (
    <div className="App backgroud-photo">
      {/* render componen */}
      <Header/>
      <Search handleSearch ={handleSearch}/>
      < Form />
      <Table transactions ={transactions}/>

    </div>
  );
}

export default App;
 