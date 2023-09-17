import React from 'react';
import './App.css';
import TransactionsTable from './Components/TransactionsTable';
import { useEffect,useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');

  function onCategoryChange(event) {
    setCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  function onDateChange(event) {
    setDate(event.target.value);
  }

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);


  return (
    <div className="App">
      <div className="header">
        <h1>My Transactions</h1>
      <div className="filters">
        <div className="filter">
        <label htmlFor="filter">Filter by category:</label>
        <select name="filter" id="filter" onChange={(e) => onCategoryChange(e)}>
          <option value="all">All</option>
          <option value="Income">Income</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Housing">Housing</option>
          <option value="Fashion">Fashion</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Gift">Gift</option>
        </select>
        </div>
        <div className="filter">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" onChange={(e)=>onDateChange(e)} />
        </div>
      <div className="filter">
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" onChange={(e)=>onSearchChange(e)} />
        </div>
      </div>
      </div>
      <div className="main">
          <TransactionsTable transactions={transactions} category={category} search={search} date={date} />
          <div className='new-transaction'>
            <h2>New Transaction</h2>
            <form action='http://localhost:3000/transactions' method='POST'>
              <label htmlFor="category">Category:</label>
              <select name="category" id="category">
                <option value="Income">Income</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Housing">Housing</option>
                <option value="Fashion">Fashion</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Gift">Gift</option>
              </select>
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" name='description' />
              <label htmlFor="amount">Amount:</label>
              <input type="number" id="amount" name='amount' />
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name='date' />
              <input type="submit" value="Add Transaction" />
            </form>
            </div>
        </div>
    </div>
  );
}

export default App;
