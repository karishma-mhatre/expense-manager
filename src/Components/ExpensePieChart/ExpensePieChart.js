import React from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';

class ExpensePieChart extends React.Component {
    config = {
        type: 'pie',
            data: {
                datasets: [
                    {
                        data: [
                            10, 20, 30, 40
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
                    'Rent',
					'Groceries',
					'Travel',
					'Electricity', 
                ]
                
            },
            options: {
				responsive: true
			}
    }

    componentDidMount = () =>  {
        var ctx = document.getElementById('expense-pie-chart').getContext('2d');
        this.createDataset();
         window.myPie = new Chart(ctx, this.config);
        console.log(this.props.expenseList);
    }

    createDataset = () => {
        for(let datedExpense of this.props.expenseList) {
            for(let expense of datedExpense.expenses) {
                if(expense.amount < 0) {
                    let dataIndex = this.config.data.labels.indexOf(expense.amount)
                    if(dataIndex > 0) {
                        this.config.data.datasets[0].data[dataIndex] += Math.abs(expense.amount);
                    }else {
                        this.config.data.labels.push(expense.name);
                    }
                }
            }
        }

        console.log(this.config);
    }

    render() {
        return (
            <div className="chart">
                <canvas id="expense-pie-chart"></canvas>
                <div>{this.props.expenseList.length}</div>
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
