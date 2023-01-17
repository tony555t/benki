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
    fetch('https://api.jsonbin.io/v3/b/63c6729ddfc68e59d584aad3')
   .then(response => response.json())
   .then(data => {
    setTransaction(data.record.transactions)
    setSearch(data.record.transactions)
   })
 

   }, [])


   function handleSearch(e){
    setTransaction(search.filter(transactions => {
      return (transactions.description.toLowerCase().includes(e.target.value))
    }))
      return transactions
   }


function handleformUpdate(formdata){
  const updatedTable = [...transactions, formdata]
  setTransaction(updatedTable)
} 





  return (
    <div className="App backgroud-photo">
      {/* render componen */}
      <Header/>
      <Search handleSearch ={handleSearch}/>
      < Form handleformUpdate={handleformUpdate}/>
      <Table transactions ={transactions}/>

    </div>
  );
}

export default App;
 