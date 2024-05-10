import React, {FC} from 'react';
import {withCommonLogicWrapper} from "../hoc/withCommonLogicWrapper";

const A:FC<any> = ({foobar}) => {
    return (
        <div>
            {foobar}
        </div>
    );
};

export default withCommonLogicWrapper(A);
