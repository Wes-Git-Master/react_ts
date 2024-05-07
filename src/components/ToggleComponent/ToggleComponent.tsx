import React, {FC} from 'react';

import useToggle from "../../custom-hooks/useToggle";


const ToggleComponent:FC = () => {

    const [Toggled, toggle] = useToggle(false)

    return (
        <div>
            <button onClick={toggle}>toggle</button>
            <p>value: {Toggled ? "true" : "false"}</p>
        </div>
    )
}

export  {ToggleComponent};