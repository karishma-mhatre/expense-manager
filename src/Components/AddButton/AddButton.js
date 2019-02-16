import React from 'react';
import './addButton.scss';

class AddButton extends React.Component {
    toggleAddExpense = () => {
        let addExpenseBlock = document.getElementsByClassName("add-expense")[0];
        if(document.querySelector(".toogleExpense").checked){
            addExpenseBlock.classList.remove("add-expense_hidden");
        }else {
            addExpenseBlock.classList.add("add-expense_hidden");
        };
    }

    render() {
        return (
            <label className="add-btn"> 
                <input type="checkbox" className="toogleExpense" onClick={this.toggleAddExpense}/>
                <i className="fa fa-plus"></i>
            </label>
        );
    }
}

export default AddButton;