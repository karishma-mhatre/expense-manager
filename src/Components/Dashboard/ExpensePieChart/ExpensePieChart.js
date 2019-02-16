import React from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { ChartTemplate } from '../ChartTemplate';

class ExpensePieChart extends React.Component {
    config = new ChartTemplate();

    options = {
        title: {
            display: true,
            text: "Expenses"
        },
        responsive: true
    }

    createDataset = () => {
        this.config.type = "pie";
        this.config.data.datasets[0].data = new Array(this.config.data.datasets[0].data.length).fill(0);
        this.config.data.datasets[0].backgroundColor = [
            'pink',
            'lightblue',
            'lightgreen',
            'lightgrey'
        ];
        for (let datedExpense of this.props.expenseList) {
            for (let expense of datedExpense.expenses) {
                if (expense.amount < 0) {
                    let dataIndex = this.config.data.labels.indexOf(expense.name);
                    if (dataIndex >= 0) {
                        this.config.data.datasets[0].data[dataIndex] += Math.abs(expense.amount);
                    } else {
                        this.config.data.labels.push(expense.name);
                        this.config.data.datasets[0].data.push(Math.abs(expense.amount));
                    }
                }
            }
        }
    }

    render() {
        this.createDataset();

        return (
            <div className="chart-container">
                <Doughnut data={this.config.data} options={this.options} redraw></Doughnut>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        expenseList: state.expenses
    }
)

export default connect(mapStateToProps)(ExpensePieChart);
