import React, {useState} from 'react';
import usePrevious from "../../custom-hooks/usePrevious";

const PreviousComponent = () => {

    const [count, setCount] = useState(0)
    const prevCount = usePrevious(count)
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    };


    return (
        <div>
            <p>CurrentValue: {count}</p>
            <p>PreviousValue: {prevCount !== undefined ? prevCount : "none"}</p>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
        </div>
    )
};

export {PreviousComponent};