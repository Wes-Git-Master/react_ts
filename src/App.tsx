import React, {FC, memo, useCallback, useState} from 'react';
import './App.css';

const A: FC<any> = memo(({foobar}) => {
    console.log('A render');
    foobar();
    return <div>hello world</div>
});

const App = () => {
    console.log('App render');
    const [counter, setCounter] = useState(0);
    const foobar = useCallback(() => {
        //....
    }, [counter]);


    return (
        <div>
            <A foobar={foobar}/>

            <button onClick={() => {
                setCounter(counter + 1);
            }}>click me
            </button>
        </div>
    );
};

export default App;
