import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment, resetState} from "./redux/slices/slice1";



const App = () => {

    const {value} = useAppSelector(state => state.slice1);

    const dispatch = useAppDispatch()

    return (
        <div>

            <h2>{value}</h2>

            <button onClick={() => {
                dispatch(decrement(50))
            }}>decrement
            </button>

            <button onClick={() => {
                dispatch(increment(50))
            }}>increment
            </button>

            <button onClick={() => {
                dispatch(resetState(0))
            }}>reset</button>

        </div>
    );
};

export default App;
