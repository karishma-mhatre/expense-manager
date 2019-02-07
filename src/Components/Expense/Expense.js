import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from './remove-expense-acion';
import * as moment from 'moment';

const Expense = ({ date, expenseList, dispatch }) => {
    return (
        <>
            <tr>
                <td>{moment(date, "YYYY-MM-DD").format('MMMM Do YYYY')}</td>
            </tr>
            {
                expenseList.map(expense =>
                    <tr key={expense.id}>
                        <td></td>
                        <td>{expense.name}</td>
                        <td>{expense.amount}</td>
                        <td>
                            <button onClick={() => dispatch(removeExpense(expense.id))}>Remove</button>
                        </td>
                    </tr>
                )
            }
        </>
    );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Expense);