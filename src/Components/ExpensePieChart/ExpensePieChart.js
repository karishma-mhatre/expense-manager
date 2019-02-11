import React from 'react';
import { connect } from 'react-redux';
import {Pie} from 'react-chartjs-2';

class ExpensePieChart extends React.Component {
    config = {
        type: 'pie',
            data: {
                datasets: [
                    {
                        data: [
                        ],
                        backgroundColor: [
                            'pink',
                            'lightblue',
                            'lightgreen',
                            'lightgrey'
                        ],
                        label: 'Expense'
                    }
                ],
                labels: [
                ]
                
            },
            options: {
				responsive: true
			}
    }

    createDataset = () => {
        for(let datedExpense of this.props.expenseList) {
            for(let expense of datedExpense.expenses) {
                if(expense.amount < 0) {
                    let dataIndex = this.config.data.labels.indexOf(expense.name)
                    if(dataIndex >= 0) {
                        this.config.data.datasets[0].data[dataIndex] += Math.abs(expense.amount);
                    }else {
                        this.config.data.labels.push(expense.name);
                        this.config.data.datasets[0].data.push(Math.abs(expense.amount));
                    }
                }
            }
        }
        console.log(this.props.expenseList);
        console.log(this.config);
    }

    render() {
        this.config.data.datasets[0].data = new Array(this.config.data.datasets[0].data.length).fill(0);
        this.createDataset();

        return (
            <div className="chart">
                <div>{this.props.expenseList.length}</div>
                <Pie data={this.config.data} redraw></Pie>
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
