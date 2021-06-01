import expensesReducer from "../../reducers/expenses";
import { v4 as uuid } from "uuid";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should add expense to expenses array", () => {
    const createdAt = moment();
    const expense = {
        id: "1",
        description: "",
        note: "",
        amount: 10500,
        createdAt
    }
    const state = expensesReducer(undefined, { type: "ADD_EXPENSE", expense });
    expect(state[state.length - 1]).toEqual(expense);
});

test("should remove expense by id", () => {
    const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: 2 });
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test("should not remove expense if id not found", () => {
    const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: 5 });
    expect(state).toEqual(expenses);
})

test("should edit expense if id found", () => {
    const updates = {
        id: expenses[1].id,
        description: "Loyer",
        note: "Ici je mets une note",
        amount: 13500,
        createdAt: moment(0).add(4, "days")
    }
    const state = expensesReducer(expenses, {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates
    });
    expect(state).toContainEqual(updates);
});

test("should not edit expense if id not found", () => {
    const updates = {
        id: "d",
        description: "Loyer",
        note: "Ici je mets une note",
        amount: 13500,
        createdAt: moment(0).add(4, "days")
    }
    const state = expensesReducer(expenses, {
        type: "EDIT_EXPENSE",
        id: "d",
        updates
    });
    expect(state).toEqual(expenses);
});
test("should not edit expense if id not found", () => {

});
