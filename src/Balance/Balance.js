import React from 'react';
import { connect } from 'react-redux';

let getBalance = (expenseList) => {
    let balance = 0
    expenseList.forEach(element => {
        balance += +element.amount;
    });

    return balance;
}
const Balance = ({expenseList}) => {
    return (
        <div>
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