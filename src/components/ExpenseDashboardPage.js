import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

const ExpenseDashboardPage = () => (
    <div>
        <p>From Dashboard Component</p>
        <ExpenseListFilter />
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;
