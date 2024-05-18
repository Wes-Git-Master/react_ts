import React from 'react';
import styles from '../../styles/homePage.style.module.css'

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.imgBlock}>
                <img src="https://timeweb.com/media/articles/0001/06/e76731a51d6a54613e5637b1d5655d1dde367785.png" alt=""
                     className={styles.img}/>
            </div>
        </div>
    );
};

export {HomePage};