import React, {useState} from 'react';
import './App.css';

interface IState {
    value: number;
}

const App = () => {

    const [counter, setCounter] = useState<IState>({value: 0});


    const increment = () => {

        setCounter(prevState => ({value: prevState.value + 1}));

    };
    const decrement = () => {
        setCounter(prevState => ({value: prevState.value - 1}));

    };
    const reset = () => {
        setCounter({value: 0});
    };
    return (
        <div>

            <h2>{counter.value}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>


        </div>
    );
};

export default App;
