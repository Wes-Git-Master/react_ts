import React from 'react';

import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <Link to='/'>home page</Link>
            <br/>
            <Link to='users'>users page</Link>
            <br/>
            <Link to='posts'>posts page</Link>
            <hr/>
        </div>
    );
};

export {HeaderComponent};