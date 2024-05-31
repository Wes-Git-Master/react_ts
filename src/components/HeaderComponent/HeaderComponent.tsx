import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "../../styles/header styles/header.module.css"

const HeaderComponent = () => {

    /*******************************************************************************************/

    return (
        <div>
            <div className={styles.headerBlock}>
                <div><NavLink to={'/'}> Login </NavLink></div>
                <div><NavLink to={'cars'}> Cars</NavLink></div>
            </div>
        </div>
    );
};

export {HeaderComponent};