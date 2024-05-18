import React from 'react';
import {NavLink} from "react-router-dom";
import styles from '../../styles/header.style.module.css'
const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <NavLink to='/'> home </NavLink>
            <NavLink to='users'> users </NavLink>
            <NavLink to='posts'> posts </NavLink>
            <NavLink to='comments'> comments </NavLink>
            <hr/>
        </div>
    );
};

export {HeaderComponent};