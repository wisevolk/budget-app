import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={ `/edit/${ id }` }><p>{ description }</p></Link>
        <p>{ amount } - { createdAt }</p>
        {/*<button onClick={ (e) => {*/ }
        {/*    dispatch(removeExpense({ id }))*/ }
        {/*} }>remove*/ }
        {/*</button>*/ }
    </div>
);

export default ExpenseListItem;
