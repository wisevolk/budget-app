import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { EditExpensePage } from "../../components/EditExpensePage";
import ExpenseForm from "../../components/ExpenseForm";

let historySpy, wrapper, editExpenseSpy, removeExpenseSpy;

beforeAll(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage expense={ expenses[1] } editExpense={ editExpenseSpy }
                                       removeExpense={ removeExpenseSpy } history={ historySpy }/>)
});

test("should render EditExpensePage", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle EditExpense", () => {
    wrapper.find(ExpenseForm).prop("onSubmit")(expenses[1]);
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith("/")
});

test("should handle removeExpense", () => {
    wrapper.find("button").simulate("click");
    expect(historySpy.push).toHaveBeenLastCalledWith("/");
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[1].id })
});
