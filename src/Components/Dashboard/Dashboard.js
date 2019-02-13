import React, {Component} from 'react';
import ExpensePieChart from './ExpensePieChart/ExpensePieChart';
import IncomePieChart from './IncomePieChart/IncomePieChart';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ExpensePieChart></ExpensePieChart>
                <IncomePieChart></IncomePieChart>
            </div>
        )
    }
}

export default Dashboard;