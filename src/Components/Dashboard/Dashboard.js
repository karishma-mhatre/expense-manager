import React, {Component} from 'react';
import ExpensePieChart from './ExpensePieChart/ExpensePieChart';
import IncomePieChart from './IncomePieChart/IncomePieChart';
import DatedExpenseBarChart from './DatedExpenseBarChart/DatedExpenseBarChart';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ExpensePieChart></ExpensePieChart>
                <IncomePieChart></IncomePieChart>
                <DatedExpenseBarChart></DatedExpenseBarChart>
            </div>
        )
    }
}

export default Dashboard;