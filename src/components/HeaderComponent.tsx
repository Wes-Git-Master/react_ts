import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/'}>login page</Link>
                </li>
                <li>
                    <Link to={'cars'}>cars page</Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;
