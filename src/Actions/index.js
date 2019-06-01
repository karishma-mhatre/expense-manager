export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const REMOVE_TRANSACTION = "REMOVE_TRANSACTION";

export const addTransaction = (name, amount, date, transactionType) => ({
    type: ADD_TRANSACTION,
    name,
    amount,
    date,
    transactionType
})

export const removeTransaction = (id, transactionType) => ({
    type: REMOVE_TRANSACTION,
    id,
    transactionType
})