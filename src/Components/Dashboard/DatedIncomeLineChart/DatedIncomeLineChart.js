import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChartTemplate } from '../ChartTemplate';
import { ChartColors } from '../ChartColors';
import { Line } from "react-chartjs-2";
import * as moment from 'moment';

class DatedIncomeBarChart extends Component {
    config = new ChartTemplate("line", {
        title: {
            display: true,
            text: "Monthly Income"
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
        this.config.data.datasets[0].backgroundColor = ChartColors.lightgrey;
        this.config.data.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];
        for (let datedTransaction of nextProps.incomes) {
            let dataIndex = moment(datedTransaction.date).month();
            for (let transaction of datedTransaction.incomeList) {
                if (transaction.amount > 0) {
                    this.config.data.datasets[0].data[dataIndex] += Math.abs(transaction.amount);
                }
            }
        }
        console.log("line chart config", this.config);
        return true;
    }

    render() {
        return (
            <div className="chart-container">
                <Line data={this.config.data} options={this.config.options}
                    redraw></Line>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        incomes: state.transactions.incomes
    }
)

export default connect(mapStateToProps)(DatedIncomeBarChart);