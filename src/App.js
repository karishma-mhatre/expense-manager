import React, { Component } from 'react';
import './styles/commons.scss';
import './styles/variables.scss';
import AddExpense from './Components/AddExpense/AddExpense';
import Header from './Components/Header/Header';
import AddButton from './Components/AddButton/AddButton';
import Dashboard from './Components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <AddExpense></AddExpense>
        <AddButton></AddButton>
        <Dashboard></Dashboard>
      </>
    );
  }
}

export default App;
