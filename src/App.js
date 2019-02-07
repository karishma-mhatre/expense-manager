import React, { Component } from 'react';
import './styles/commons.scss';
import './styles/variables.scss';
import AddExpense from './Components/AddExpense/AddExpense';
import ExpenseList from './Components/ExpenseList/ExpenseList';
import Header from './Components/Header/Header';
import AddButton from './Components/AddButton/AddButton';
import ExpensePieChart from './Components/ExpensePieChart/ExpensePieChart';

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <AddExpense></AddExpense>
        {/* <div className="content">
          <ExpenseList></ExpenseList>
        </div> */}
        <AddButton></AddButton>
        <div className="container charts-container">
          <ExpensePieChart></ExpensePieChart>
        </div>
      </>
    );
  }
}

export default App;
