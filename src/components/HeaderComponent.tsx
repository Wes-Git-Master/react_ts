import React from 'react';
import {Link, NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to="/">home page</NavLink>
            <br/>
            <Link to="users">users page</Link>
            <hr/>
        </div>
    );
};

export default HeaderComponent;
