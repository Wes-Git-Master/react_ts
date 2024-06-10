import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    value: number
}
const initialState: CounterStateType = {
    value: 0
}

/********************   createSlice   *************************/

export const counter1Slice = createSlice({
    name: "counter1",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
        incrementByAmount: (state,
                            action: PayloadAction<number>) => {
            state.value = state.value + action.payload
        },
        decrementByAmount: (state,
                            action: PayloadAction<number>) => {
            state.value = state.value - action.payload
        },
        resetState: (state) => {
            state.value = 0
        }
    }
})

export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    resetState
} = counter1Slice.actions