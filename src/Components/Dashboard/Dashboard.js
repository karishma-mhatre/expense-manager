import React, {Component} from 'react';
import ExpenseDoughnutChart from './ExpenseDoughnutChart/ExpenseDoughnutChart';
import IncomePieChart from './IncomePieChart/IncomePieChart';
import DatedExpenseBarChart from './DatedExpenseBarChart/DatedExpenseBarChart';
import DatedIncomeLineChart from './DatedIncomeLineChart/DatedIncomeLineChart';
import './dashboard.scss';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <ExpenseDoughnutChart></ExpenseDoughnutChart>
                <IncomePieChart></IncomePieChart>
                <DatedExpenseBarChart></DatedExpenseBarChart>
                <DatedIncomeLineChart></DatedIncomeLineChart>
            </div>
        )
    }
}

export default Dashboard;