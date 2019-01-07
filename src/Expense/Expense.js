import React from 'react';

const Expense = ({removeExpense, name, amount, id}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{amount}</td>
            <td>
                <button onClick={removeExpense}>Remove</button>
            </td>
            <td>{id}</td>
        </tr>
    );
}

export default Expense;