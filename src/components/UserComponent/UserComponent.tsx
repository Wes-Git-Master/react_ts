import React, {FC} from 'react';
import {IUserModel} from "../../model/IUserModel";
import styles from '../../styles/user.style.module.css'
interface IProps {
    user: IUserModel
}

type IPropsType = IProps & { children?: React.ReactNode }
const UserComponent: FC<IPropsType> = ({user}) => {
    return (
        <div className={styles.singleUserBlock}>
            <p>id : {user.id}</p>
            <p>Name : {user.name}</p>
        </div>
    );
};

export {UserComponent};