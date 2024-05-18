import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className={'header'}>
            <NavLink to='/'> home </NavLink>
            <NavLink to='users'> users </NavLink>
            <NavLink to='posts'> posts </NavLink>
            <NavLink to='comments'> comments </NavLink>
            <hr/>
        </div>
    );
};

export {HeaderComponent};