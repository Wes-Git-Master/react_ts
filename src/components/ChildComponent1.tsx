import React, {FC} from "react";
import {ChildComponent2} from "./ChildComponent2";

interface IProps {
    item: number,
    foobar: (data: string) => void
}

const ChildComponent1: FC<IProps> = ({item, foobar}) => {

    foobar('ashdasjhdj');
    return <div>

        <ChildComponent2 foobar={foobar}/>
    </div>
}

export default ChildComponent1;
