import { REMOVE_TRANSACTION, ADD_TRANSACTION } from '../Actions/index';

// 
// State structure
//
//
//var state = {
//     espenses: [
//         {
//             date,
//             expenseList: [
//                 {
//                     id,
//                     name,
//                     amount
//                 }
//             ]
//         }
//     ],
//     incomes: [
//         {
//             date,
//             incomeList: [
//                 {
//                     id,
//                     name,
//                     amount
//                 }
//             ]
//         }
//     ]
// }

let transactionCount = 0;
let initialState = {
    expenses: [],
    incomes: [],
    balance: 0
}

export const transactions = (state = initialState, action) => {
    let balance = state.balance;
    switch(action.type) {
        case ADD_TRANSACTION:
            transactionCount++;
            let transactions = [];
            if(action.transactionType === "expense") {
                transactions = Object.assign([], state.expenses);
                balance -= action.amount;
            }else {
                transactions = Object.assign([], state.incomes);
                balance += action.amount;
            }
            let datedTransactions = transactions.find(element => element.date === action.date);
            if(datedTransactions) {
                datedTransactions[action.transactionType + 'List'].push(
                    {
                        id: transactionCount,
                        name: action.name,
                        amount: action.amount,
                    }
                );
            }else {
                transactions.push({
                    date: action.date,
                    [action.transactionType + 'List']: [
                        {
                            id: transactionCount,
                            name: action.name,
                            amount: action.amount,
                        }
                    ]
                });
            }

            return {
                ...state,
                [action.transactionType + 's']: transactions,
                balance
            }

        case REMOVE_TRANSACTION:
            if (action.transactionType === "expense") {
                transactions = Object.assign([], state.expenses);
            } else {
                transactions = Object.assign([], state.incomes);
            }
            transactions.forEach((e) => {
                e[action.transactionType + "List"] = [...e[action.transactionType + "List"].filter((trans) => (trans.id !== action.id))];
            })
            // for (let datedExpense of state) {
            //     datedExpense.expenses = [
            //         ...datedExpense.expenses.filter((expense) => (expense.id !== action.id))
            //     ]
            // }
            break;
        default:
            return state;
    }
}