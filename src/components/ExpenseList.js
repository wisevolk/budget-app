import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpense from "../selectors/expenses"

export const ExpenseList = (props) => (
    <div>
        { props.expenses && props.expenses.length !==  0 ? (
            props.expenses.map((expense) => (
                <ExpenseListItem
                    key={ expense.id }
                    { ...expense }
                />
                // console.log(expense);
            ))
        ) : (
            <p>No expenses yet</p>
        ) }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);
