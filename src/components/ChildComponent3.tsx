import React, {FC} from "react";

export const ChildComponent3: FC<any> =
    ({foobar}) => {
    return <div>
        <button onClick={() => {
            foobar('okten');
        }}>click me
        </button>

    </div>
}
