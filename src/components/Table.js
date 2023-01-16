import React from "react";
// import Table from "./Table"

function Table ({transactions}) {

    const transactionTable=transactions.map(transaction => {
        return <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              

        </tr>
    })

  

    return (
      
    <table className="table table-hover bg-primary mt-5">
      <thead>
        <tr>
         
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Categories</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactionTable}
          </tbody>
    </table> 
          
       
    );
}

export default Table;