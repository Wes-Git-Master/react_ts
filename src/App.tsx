import React, {useEffect, useState} from 'react';
import './App.css';


const App = () => {

    const [counter, setCounter] = useState<number>(0);
    let [x, setX] = useState<number>(0);
    useEffect(() => {
        let id = setInterval(() => {
            setCounter(counter + 1);
        }, 2000);
        return () => {
            console.log('...useEffect return cb');
            clearInterval(id);
        }
    }, [x]);
    console.log('.');

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => {
                setX((x) => x + 1);
            }}></button>
        </div>
    );
};

export default App;
