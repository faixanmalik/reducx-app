import { createReducer } from "@reduxjs/toolkit";

let initialState = {
    balance:0
};

const amountReducer = createReducer(initialState , {
    increment: (state, action) => {
        state.balance += action.payload;
    },
    decrement: (state, action) => {
        state.balance -= action.payload;
    }
}) 

export default amountReducer;