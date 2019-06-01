import React, { Component } from 'react';
import { connect } from 'react-redux';
import './balance.scss'

let getBalance = (expenseList) => {
    let balance = 0
    expenseList.forEach(element => {
        element.expenses.forEach(expense =>{
            balance += +expense.amount;
        });
    });

    return balance;
}
class Balance extends Component {
    render() {
        console.log("balance", this.props);
        return (
            <div className="balance">
                <span>Balance: </span>
                {
                    this.props.balance ? this.props.balance : 0
                }
            </div>
        )
    }
}
// const Balance = ({balance}) => {
//     return (
//         <div className="balance">
//             <span>Balance: </span>
//             {
//                 balance ? balance : 0
//             }
//         </div>
//     )
// }

const mapStateToProps = state => (
    {
        balance: state.transactions.balance
    }
)

export default connect(mapStateToProps)(Balance);