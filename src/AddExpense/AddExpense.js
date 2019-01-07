import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from './Actions';

const AddExpense = ({dispatch}) => {

    let add = (e) => {
        e.preventDefault();
        let expenseName = document.getElementById('expenseName').value;
        let expenseAmount = document.getElementById('expenseAmount').value;
        let expenseType = document.querySelector('input[name="expense-type"]:checked').value;
        dispatch(addExpense(expenseName, expenseAmount, expenseType));
    }

    
        return(
            <>
                <form onSubmit={(e) => {add(e)}}>
                    <select id="expenseName">
                        <option value="Monthly Budget">Monthly Budget</option>
                        <option value="Rent">Rent</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Electricity">Electricity</option>
                    </select>
                    <input type="Number" id="expenseAmount" required></input>
                    <input type="radio" name="expense-type" id="expense" value="expense" defaultChecked={true}></input>
                    <label id="expense">Expense</label>
                    <input type="radio" name="expense-type" id="income" value="income" ></input>
                    <label id="income">Income</label>
                    <button>Add</button>
                </form>
            </>
        );
}

export default connect()(AddExpense);