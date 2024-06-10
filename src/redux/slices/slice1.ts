import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number
}
const initialState: CounterStateType = {
    value: 0
}

/********************   slice1 *************************/

export const counter1Slice = createSlice({
    name: "counter1",
    initialState: initialState,
    reducers: {
        increment: (state,
                    action:PayloadAction<number>) => {
            state.value = state.value + action.payload
        }, decrement: (state,
                       action:PayloadAction<number>) => {
            state.value = state.value - action.payload
        },
    }
})

export const {
    increment,
    decrement
} = counter1Slice.actions