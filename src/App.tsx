import React, {FC, useState} from 'react';

const App: FC = () => {

    let [number, setNumber] = useState<number>(0);

    // let number = 0;


    const increment = () => {
        setNumber(prevState => prevState + 1)
        console.log(number)
    }

    return (
        <>

            <h2>{number}</h2>
            <button onClick={increment}>increment</button>

        </>
    );
};

export default App;