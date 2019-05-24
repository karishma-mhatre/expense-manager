export const addExpense = (name, amount, expenseType, date, id) => ({
    type: "ADD_EXPENSE",
    amount,
    name,
    expenseType,
    date
});