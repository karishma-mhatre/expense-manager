import React from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { ChartTemplate } from '../ChartTemplate';
import { ChartColors } from '../ChartColors'

class IncomePieChart extends React.Component {
    config = new ChartTemplate("pie", {
        title: {
            display: true,
            text: "Income"
        },
        responsive: true
    });

    shouldComponentUpdate = (nextProps) => {
        this.config.data.datasets[0].data = new Array(this.config.data.datasets[0].data.length).fill(0);
        this.config.data.datasets[0].backgroundColor = [
            ChartColors.pink,
            ChartColors.lightblue,
            ChartColors.lightgreen,
            ChartColors.lightgrey,
            ChartColors.lightsalmon
        ];
        for(let datedIncomes of nextProps.incomes) {
            for(let transaction of datedIncomes.incomeList) {
                if(transaction.amount > 0) {
                    let dataIndex = this.config.data.labels.indexOf(transaction.name);
                    if(dataIndex >= 0) {
                        this.config.data.datasets[0].data[dataIndex] += Math.abs(transaction.amount);
                    }else {
                        this.config.data.labels.push(transaction.name);
                        this.config.data.datasets[0].data.push(Math.abs(transaction.amount));
                    }
                }
            }
        }

        console.log(this.config);
        return true;
    }
    
    render() {
        return (
            <div className="chart-container">
                <Pie data={this.config.data} options={this.config.options} redraw></Pie>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        incomes: state.transactions.incomes
    }
)

export default connect(mapStateToProps)(IncomePieChart);
