import React from 'react';
import { connect } from 'react-redux';
import { addTransaction } from '../../Actions';
import './addExpense.scss';
import '../../styles/commons.scss';

const AddExpense = ({dispatch}) => {

    let add = (e) => {
        e.preventDefault();
        let expenseName = document.getElementById('expenseName').value;
        let expenseAmount = +document.getElementById('expenseAmount').value;
        let expenseType = document.querySelector('input[name="expense-type"]:checked').value;
        let date = document.getElementById('date').value;
        
        dispatch(addTransaction(expenseName, expenseAmount, date, expenseType));
    }


    return (
        <div className='add-expense add-expense_hidden'>
            <form className="container add-expense_form" onSubmit={(e) => { add(e) }}>
                <div className="add-expense_header">ADD EXPENSE</div>
                <div className="container form-input">
                    <label htmlFor="date" className="form-input_label">SELECT DATE</label>
                    <input type="date" name="date" id="date" className="form-input_input"></input>
                </div>
                <div className="container form-input form-select">
                    <label className="form-input_label">
                        SELECT EXPENSE
                        </label>
                    <select id="expenseName" className="form-input_input">
                        <option value="Monthly Budget">Monthly Budget</option>
                        <option value="Rent">Rent</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Travel">Travel</option>
                    </select>
                </div>
                <div className="container form-input">
                    <label htmlFor="expenseAmount" className="form-input_label">EXPENSE AMOUNT</label>
                    <input type="number" id="expenseAmount" name="expenseAmount" className="form-input_input" required></input>
                </div>
                <div className="container container_flex-direction_row form-radio">
                    <div>
                        <input type="radio" name="expense-type" id="expense" value="expense" defaultChecked={true}></input>
                        <label id="expense" className="form-input_label">EXPENSE</label>
                    </div>
                    <div>
                        <input type="radio" name="expense-type" id="income" value="income" ></input>
                        <label id="income" className="form-input_label">INCOME</label>
                    </div>
                </div>
                <div className="container">
                    <button className="btn">ADD EXPENSE</button>
                </div>
            </form>
        </div>
    );
}

export default connect()(AddExpense);