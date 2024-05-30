import React from 'react';
import {NavLink} from "react-router-dom";
import styles from

const HeaderComponent = () => {
    return (
        <div>
            <ul className={}>
                <p><NavLink to={'/'}> auth page</NavLink></p>
                <p><NavLink to={'cars'}> cars page</NavLink></p>
            </ul>
            <hr/>
        </div>
    );
};

export {HeaderComponent};