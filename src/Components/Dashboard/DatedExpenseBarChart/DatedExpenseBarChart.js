import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChartTemplate } from '../ChartTemplate';
import { Bar } from "react-chartjs-2";
import { ChartColors } from '../ChartColors';
import * as moment from 'moment';

class DatedExpenseBarChart extends Component {
    config = new ChartTemplate("line",{
        title: {
            display: true,
            text: "Monthly Expenses"
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                }
            }]
        },
        responseive: true
    });

    shouldComponentUpdate = (nextProps) => {
        this.config.data.datasets[0].data = new Array(12).fill(0);
        this.config.data.datasets[0].backgroundColor = ChartColors.lightblue;
        this.config.data.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];
        for (let datedExpense of nextProps.expenses) {
            let dataIndex = moment(datedExpense.date).month();
            for (let expense of datedExpense.expenseList) {
                this.config.data.datasets[0].data[dataIndex] += Math.abs(expense.amount);
            }
        }
        
        return true;
    }

    render() {
        return (
            <div className="chart-container">
                <Bar data={this.config.data} options={this.config.options} redraw></Bar>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        expenses: state.transactions.expenses
    }
)

export default connect(mapStateToProps)(DatedExpenseBarChart);