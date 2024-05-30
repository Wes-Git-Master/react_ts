import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/'}> auth page</NavLink></li>
                <li><NavLink to={'cars'}> cars page</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export {HeaderComponent};