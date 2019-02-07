import React from 'react';
import { connect } from 'react-redux';
import './balance.scss'

;let getBalance = (expenseList) => {
    let balance = 0
    expenseList.forEach(element => {
        element.expenses.forEach(expense =>{
            balance += +expense.amount;
        });
    });

    return balance;
}
const Balance = ({expenseList}) => {
    return (
        <div className="balance">
            <span>Balance: </span>
            {
                getBalance(expenseList)
            }
        </div>
    )
}

const mapStateToProps = state => (
    {
        expenseList: state.expenses
    }
)

export default connect(mapStateToProps)(Balance);