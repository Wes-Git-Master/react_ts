import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice";
import {carReducer} from "./slices/carSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cars: carReducer
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export {
    store
}

export type {
    RootState,
    AppDispatch
}