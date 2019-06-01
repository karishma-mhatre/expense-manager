/*
*
*Structure of expenses
*expense = [
*   {
*       date,
*       expenses: [           
*           {
*               name,
*               type,
*               amount,
*               id
*           }
*       ]
*   }
*]
*
*/

let expenseCount = 0;
export const expenses = (state = [], action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            expenseCount++;
            if (action.expenseType === "expense") {
                action.amount = -action.amount;
            }
            
            let expenseList = [];
            Object.assign(expenseList, state);
            let datedExpenses = expenseList.find(element => element.date === action.date);

            if (datedExpenses) {
                datedExpenses.expenses.push({
                    name: action.name,
                    type: action.expenseType,
                    amount: action.amount,
                    id: expenseCount
                });
            } else {
                expenseList.push({
                    date: action.date,
                    expenses: [{
                        name: action.name,
                        type: action.expenseType,
                        amount: action.amount,
                        id: expenseCount
                    }]
                });
            }

            return expenseList;
        case "REMOVE_EXPENSE":
            for (let datedExpense of state) {
                datedExpense.expenses = [
                    ...datedExpense.expenses.filter((expense) => (expense.id !== action.id))
                ]
            }

            return Object.assign([], state.filter(function (element) {
                return element.expenses.length !== 0;
            }));
        default:
            return state;
    }
}

