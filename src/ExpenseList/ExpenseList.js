
import React from 'react';
import { connect } from 'react-redux';
import Expense from '../Expense/Expense';
import {removeExpense} from './remove-expense-acion';

const ExpenseList = ({expenseList, dispatch}) => {
    return (
        <table>
            <tbody>
            <tr>
                <td>Expense Name</td>
                <td>Amount</td>
                <td>Remove Expense</td>
            </tr>
            {
                expenseList.map(expense => (
                    <Expense key={expense.id} id={expense.id}removeExpense={() => dispatch(removeExpense(expense.id))}
                     name={expense.name} 
                     amount={expense.amount}>
                     </Expense>
                ))
            }
            </tbody>
        </table>
    )
}

const mapStateToProps = state => (
    {
        expenseList: state.expenses
    }
)

export default connect(mapStateToProps)(ExpenseList);

