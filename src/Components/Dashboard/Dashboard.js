import React, {Component} from 'react';
import ExpensePieChart from './ExpensePieChart/ExpensePieChart';
import IncomePieChart from './IncomePieChart/IncomePieChart';
import DatedExpenseBarChart from './DatedExpenseBarChart/DatedExpenseBarChart';
import DatedIncomeLineChart from './DatedIncomeLineChart/DatedIncomeLineChart';
import './dashboard.scss';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <ExpensePieChart></ExpensePieChart>
                <IncomePieChart></IncomePieChart>
                <DatedExpenseBarChart></DatedExpenseBarChart>
                <DatedIncomeLineChart></DatedIncomeLineChart>
            </div>
        )
    }
}

export default Dashboard;