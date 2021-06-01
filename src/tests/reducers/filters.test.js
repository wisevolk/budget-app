import filterReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter", () => {
    const state = filterReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
});

test("should set sortBy to amount", () => {
    const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
    const currentState = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
    const state = filterReducer(currentState, { type: "SORT_BY_DATE" });
    expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
    const state = filterReducer(undefined, { type: "SET_TEXT_FILTER", text: "hello" });
    expect(state.text).toBe("hello");
});

test("should set starDate filter", () => {
    const startDate = moment().add(1, "month");
    const state = filterReducer(undefined, {
        type: "SET_START_DATE",
        startDate
    });

    expect(state.startDate.valueOf())
        .toBe(startDate.valueOf());
});

test("should set endDate filter", () => {
    const endDate = moment().add("1", "month");
    const state = filterReducer(undefined, {
        type: "SET_END_DATE",
        endDate
    });
    expect(state.endDate).toEqual(endDate);
});
