import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {counter1Slice} from "./slices/slice1";


/********************   configureStore   *************************/

export const store = configureStore({
    reducer: {
        slice1: counter1Slice.reducer
    }
})

/********************   useAppSelector hook  *************************/

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector
    = useSelector.withTypes<RootState>()

/********************   useAppDispatch hook  *************************/

type AppDispatch = typeof store.dispatch
export const useAppDispatch
    = useDispatch.withTypes<AppDispatch>()