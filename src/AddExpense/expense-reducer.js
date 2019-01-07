let expenseCount = 0;
export const expenses = (state=[], action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
            if(action.expenseType === "expense") {
                action.amount = -action.amount;
            }
            return [
                ...state,
                {
                    name: action.name,
                    type: action.expenseType,
                    amount: action.amount,
                    id: expenseCount++
                }

            ]
        case "REMOVE_EXPENSE":
            return [
                ...state.filter((expense) => (expense.id !== action.id))
            ];
        default:
            return state;
    }
}

