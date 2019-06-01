import React, { Component } from 'react';
import { connect } from 'react-redux';
import './balance.scss'

class Balance extends Component {
    render() {
        console.log("balance", this.props);
        return (
            <div className="balance">

                <span>Balance: <span><i className="fas fa-rupee-sign"></i></span> </span>
                {
                    this.props.balance ? this.props.balance : 0
                }
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        balance: state.transactions.balance
    }
)

export default connect(mapStateToProps)(Balance);