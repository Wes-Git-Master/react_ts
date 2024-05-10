import React, {FC} from "react";
import {ChildComponent2} from "./ChildComponent2";


const ChildComponent1: FC<any> =
    ({foobar}) => {

        foobar('ashdasjhdj');
        return <div>

            <ChildComponent2 foobar={foobar}/>
        </div>
    }

export default ChildComponent1;
