
import React from 'react';
import { connect } from 'react-redux';
import Expense from '../Expense/Expense';

const ExpenseList = ({ expenseList }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>Date</td>
                    <td>Expense Name</td>
                    <td>Amount</td>
                    <td>Remove Expense</td>
                </tr>
                {
                    expenseList.map(element => (
                        <Expense key={element.date}
                            expenseList={element.expenses}
                            date={element.date}>
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

