// ADD_EXPENSE
import { v4 as uuid } from "uuid";

export const addExpense = ({
                        description = "",
                        note = "",
                        amount = 0,
                        createdAt = 0
                    } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE
export const removeExpense = ({ id = uuid.NIL } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT_EXPENSE
export const editExpense = (id = uuid.NIL, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
