import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, decrementByAmount, increment, incrementByAmount, resetState} from "./redux/slices/slice1";

const App = () => {

    const {value} = useAppSelector(state => state.slice1);
    const dispatch = useAppDispatch()

    /***************************************************************/

    return (
        <div>

            <h2>{value}</h2>

            <button onClick={() => {
                dispatch(decrement())
            }}> decrement
            </button>

            <button onClick={() => {
                dispatch(increment())
            }}> increment
            </button>

            <br/>

            <button onClick={() => {
                dispatch(incrementByAmount(100))
            }}> incrementByAmount
            </button>

            <button onClick={() => {
                dispatch(decrementByAmount(100))
            }}> decrementByAmount
            </button>

            <br/>

            <button onClick={() => {
                dispatch(resetState())
            }}> reset
            </button>

        </div>
    );
};

export default App;
