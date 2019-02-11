import React, { Component } from 'react';
import './styles/commons.scss';
import './styles/variables.scss';
import AddExpense from './Components/AddExpense/AddExpense';
import Header from './Components/Header/Header';
import AddButton from './Components/AddButton/AddButton';
import ExpensePieChart from './Components/ExpensePieChart/ExpensePieChart';
import IncomePieChart from './Components/IncomePieChart/IncomePieChart';

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <AddExpense></AddExpense>
        <AddButton></AddButton>
        <div className="container charts-container">
          <ExpensePieChart></ExpensePieChart>
          <IncomePieChart></IncomePieChart>
        </div>
      </>
    );
  }
}

export default App;
