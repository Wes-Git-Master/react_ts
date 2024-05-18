import React, {FC} from 'react';
import {IUserModel} from "../../model/IUserModel";
import styles from '../../styles/user.style.module.css'

interface IProps {
    user: IUserModel
}

type IPropsType = IProps & { children?: React.ReactNode }
const UserComponent: FC<IPropsType> = ({user}) => {
    return (
        <div>
            <div className={styles.singleUserBlock}>
                <p className={styles.userId}>id : {user.id}</p>
                <p className={styles.userName}>Name : {user.name}</p>
            </div>
        </div>
    );
};

export {UserComponent};