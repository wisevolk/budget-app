import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

test("should generate ExpenseList", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should generate ExpenseList without Expenses", ()=>{
   const wrapper = shallow(<ExpenseList/>);
   expect(wrapper).toMatchSnapshot();
});
