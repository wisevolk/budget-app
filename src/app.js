import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss"
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import { setTextFilter } from "./actions/filters";

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpense);
});

store.dispatch(addExpense({ description: "Water bill", amount: 200, createdAt: Date.now() }));
store.dispatch(addExpense({ description: "Gas bill", amount: 100, createdAt: Date.now() + 5 }));
store.dispatch(addExpense({ description: "Rent bill", amount: 109500, createdAt: Date.now() - 13 }));

// store.dispatch(setTextFilter("water"));

// setTimeout(() => {
//     store.dispatch(setTextFilter("bill"));
// }, 3000)
//
// const state = store.getState();
// const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpense);

const jsx = (
    <Provider store={ store }>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
