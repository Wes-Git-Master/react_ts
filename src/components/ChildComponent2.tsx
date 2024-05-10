import React, {FC} from "react";
import {ChildComponent3} from "./ChildComponent3";


export const ChildComponent2: FC<any> = (
    {foobar}) => {
    return <div>
        <ChildComponent3 foobar={foobar}/>

    </div>
}


// export {ChildeComponent2:ChildeComponent2}
