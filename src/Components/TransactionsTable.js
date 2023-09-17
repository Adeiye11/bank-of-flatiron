import React from "react";
import Transaction from "./Transaction";

// Define the TransactionsTable component which displays a table of transactions
function TransactionsTable({ transactions, category, search, date }) {
  return (
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
        {/* Map through the transactions array and render a Transaction component for each */}
        {transactions.map((transaction) => (
          // Pass transaction data, category, search, date, and a unique key to each Transaction component
          <Transaction
            transaction={transaction}
            category={category}
            search={search}
            date={date}
            key={transaction.id}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsTable;
