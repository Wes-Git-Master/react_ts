import React, {FC} from 'react';
import {IUserModel} from "../../model/IUserModel";
import styles from '../../styles/user.style.module.css'
import {NavLink} from "react-router-dom";

interface IProps {
    user: IUserModel
}

type IPropsType = IProps & { children?: React.ReactNode }
const UserComponent: FC<IPropsType> = ({user}) => {
    return (
        <>
            <div className={styles.singleUserBlock}>
                <p className={styles.userId}>id : {user.id}</p>
                <p className={styles.userName}><NavLink to={user.id.toString()} className={styles.NavLink}>Name : {user.name}</NavLink></p>
            </div>
        </>
    );
};

export {UserComponent};