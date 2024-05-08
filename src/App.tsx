import React, {useEffect, useRef, useState} from 'react';
import './App.css';


const App = () => {


    const [x, setX] = useState<number>(0);
    const y = useRef(0);

    console.log('work');

    return (
        <>
            <button onClick={() => {

                setX((x) => x + 1);
            }}>change x {x}
            </button>

            <button onClick={() => {
                y.current++;
                console.log(y);
            }}>change y - {y.current}
            </button>
        </>
    );
};

export default App;
