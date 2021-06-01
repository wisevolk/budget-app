import { createStore } from "redux";

// Actions Generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({count})=>({
    type: "SET",
    count
});

const resetCount = () => ({
    type:"RESET"
});

// Reducers
// 1. Reducers are pure function
// 2. Never change state or actions

const countReducer = ((state = { count: 0 }, action) => {
    switch(action.type) {
        case "SET":
            return {
                count: action.count
            }
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state;
    }

});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount({}));
// Increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
//
// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(resetCount());
// store.dispatch({
//     type: 'RESET'
// })


store.dispatch(decrementCount({}));
store.dispatch(decrementCount({ decrementBy: 10 }));
// store.dispatch({
//     type: 'DECREMENT'
// });
//
// store.dispatch({
//     type: "DECREMENT",
//     decrementBy: 10
// });

store.dispatch(setCount({ count: 101 }));
// store.dispatch({
//     type: "SET",
//     count: 101
// })
