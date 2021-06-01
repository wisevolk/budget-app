import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

let addExpenseSpy, historySpy, wrapper;

beforeAll(() => {
    addExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpenseSpy} history={historySpy}/>);
});

test("should render AddExpense", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit",()=>{
   wrapper.find(ExpenseForm).prop("onSubmit")(expenses[1]);
   expect(historySpy.push).toHaveBeenLastCalledWith("/");
   expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
});
