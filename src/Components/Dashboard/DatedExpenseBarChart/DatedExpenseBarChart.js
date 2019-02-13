import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ChartTemplate} from '../ChartTemplate';
import { Line } from "react-chartjs-2";
import * as moment from 'moment';

class DatedExpenseBarChart extends Component {
    config = new ChartTemplate();
    createDataset = () => {
        this.config.type = "line";
        this.config.data.datasets[0].data = new Array(12).fill(0);
        this.config.data.datasets[0].backgroundColor = "lightblue"
        this.config.data.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];
        for(let datedExpense of this.props.expenseList) {

            let dataIndex = this.config.data.labels.indexOf(moment(datedExpense.date).month());
            dataIndex = moment(datedExpense.date).month();
            for(let expense of datedExpense.expenses) {
                if(expense.amount < 0) {
                    this.config.data.datasets[0].data[dataIndex] += Math.abs(expense.amount);
                }
            }
        }

        console.log(this.config.data);
    }

    render() {
        this.createDataset();
        return(
            <div className="chart">
                <Line data={this.config.data} options={{
                      scales: {
                        yAxes: [{
                          ticks: {
                             min: 0,
                           }
                         }]
                        },
                       title: {
                        display: true,
                        text: "Monthly Expenses"
                       }
                }}
                redraw></Line>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        expenseList: state.expenses
    }
)

export default connect(mapStateToProps)(DatedExpenseBarChart);