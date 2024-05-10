import React, {memo, useState} from 'react';
import './App.css';

const A = memo(() => {
    console.log('A render');
    return <div>hello world</div>
});

const App = () => {
    console.log('App render');
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <A/>

            <button onClick={() => {
                setCounter(counter + 1);
            }}>click me
            </button>
        </div>
    );
};

export default App;
