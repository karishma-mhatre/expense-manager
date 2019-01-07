import React, { Component } from 'react';
import './App.css';
import AddExpense from './AddExpense/AddExpense';
import ExpenseList from './ExpenseList/ExpenseList';
import Balance from './Balance/Balance';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
     <>
      <Header></Header>
      <AddExpense></AddExpense>
      <ExpenseList></ExpenseList>
      <Balance></Balance>
     </>
    );
  }
}

export default App;
