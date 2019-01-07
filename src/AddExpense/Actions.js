export const addExpense = (name,amount,expenseType) => ({
    type: "ADD_EXPENSE",
    amount,
    name,
    expenseType
});