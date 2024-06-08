import React from 'react';
import './App.css';
import {decrement, increment, incrementsByAmount, useAppDispatch, useAppSelector} from "./redux/store";


const App = () => {

    const counter1ValueState = useAppSelector(state => state.counter1SliceState.value)
    const dispatch = useAppDispatch()

    return (
        <div>

            <h2>{counter1ValueState}</h2>
            <button onClick={() => dispatch(increment())}> do increment</button>
            <button onClick={() => dispatch(decrement())}> do decrement</button>
            <button onClick={() => dispatch(incrementsByAmount(10))}> do inc by amount of 10</button>

        </div>
    );
};

export default App;
