import React from 'react';

function Transaction({ transaction,category,search,date }) {
    if (category !== 'all' && transaction.category !== category) {
        return null;
    }
    if (search !== '' && !transaction.description.includes(search)) {
        return null;
    }
    if (date !== '' && transaction.date !== date) {
        return null;
    }

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