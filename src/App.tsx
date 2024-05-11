import React, {FC, useReducer} from 'react';


const reducerActions = (state: number, action: { type: string, payload: number }) => {
    switch (action.type) {
        case 'add':
            return state + action.payload;
        case 'getBack':
            return state - action.payload;
        case 'reset':
            return 0;
    }
    return state
}

const App: FC = () => {

    const [number, dispath] = useReducer(reducerActions, 0);

    const add = () => {
        dispath({type: 'add', payload: 10})
    }

    const getBack = () => {
        dispath({type: 'getBack', payload: 10})
    }

    const reset = () => {
        dispath({type: 'reset', payload: 0})
    }


    return (
        <>

            <h2>Reducer demo.current value: {number}</h2>
            <button onClick={add}>add</button>
            <button onClick={getBack}>getBack</button>
            <button onClick={reset}>reset</button>
            <hr/>

        </>
    );
};

export default App;

