import React from 'react';
import {NavLink} from "react-router-dom";
import styles from '../../styles/header.style.module.css'
const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='users'> users </NavLink>
        </div>
    );
};

export {HeaderComponent};