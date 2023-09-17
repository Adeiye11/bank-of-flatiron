import React from "react";
import Transaction from "./Transaction";

function TransactionsTable({transactions,category,search,date}){
  return(
    <table className="transactions">
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <Transaction transaction={transaction} category={category} search={search} date={date} key={transaction.id} />
          ))}
        </tbody>
        </table>
  )
}

export default TransactionsTable;