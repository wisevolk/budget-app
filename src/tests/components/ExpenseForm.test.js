import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import { SingleDatePicker } from "react-dates";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should render ExpenseForm with no data", () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={ expenses[1] }/>);
    expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    const value = "New description";
    wrapper.find('input').at(0).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("description")).toBe(value);
});

test("should set note on textarea change", () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = "My new note";
    wrapper.find("textarea").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("note")).toBe(value);
})

test("should set amount if valid input", () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = 12.12;
    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount with invalid value", () => {
    const wrapper = shallow(<ExpenseForm/>);
    const initialValue = 0;
    wrapper.setState({ "amount": initialValue });
    const value = 12.122;
    wrapper.find("input").at(1).simulate("change", {
        target: value
    });
    // expect(wrapper.state("amount")).toBe(initialValue)
    expect(wrapper.state("amount")).not.toBe(value);
});

test("should call onSubmitForm for valid form submission", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={ expenses[0] } onSubmit={ onSubmitSpy }/>);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    });
});

test("should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find(SingleDatePicker).prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set calendar on change", () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find(SingleDatePicker).prop("onFocusChange")({ focused });
    expect(wrapper.state("calendarFocused")).toBeTruthy();
});

