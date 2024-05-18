import React from 'react';
import styles from '../../styles/homePage.style.module.css'
const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.imgBlock}><img src="https://static.javatpoint.com/computer/images/what-is-a-home-page.jpg" alt=""/></div>
        </div>
    );
};

export {HomePage};