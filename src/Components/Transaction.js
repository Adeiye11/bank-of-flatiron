import React from 'react';

// Define the Transaction component which displays a single transaction
function Transaction({ transaction, category, search, date }) {
    // Check if the transaction matches the specified category, if not, return null
    if (category !== 'all' && transaction.category !== category) {
        return null;
    }
    // Check if the transaction's description includes the search string, if not, return null
    if (search !== '' && !transaction.description.includes(search)) {
        return null;
    }
    // Check if the transaction's date matches the specified date, if not, return null
    if (date !== '' && transaction.date !== date) {
        return null;
    }

    // If all conditions pass, render the transaction row
    return (
        <tr className="transaction">
            <td className="transaction_category">{transaction.category}</td>
            <td className="transaction_description">{transaction.description}</td>
            <td className="transaction_amount">{transaction.amount}</td>
            <td className="transaction_date">{transaction.date}</td>
        </tr>
    );
}

export default Transaction;
