import React, {FC} from 'react';
import {IUserModel} from "../../model/IUserModel";

interface IProps {
    user: IUserModel
}

type IPropsType = IProps & { children?: React.ReactNode }
const UserComponent: FC<IPropsType> = ({user}) => {
    return (
        <div>
            <ul>
                <h4>userId : {user.id}</h4>
                <li>Name : {user.name}</li>
                <li>Username : {user.username}</li>
            </ul>
        </div>
    );
};

export {UserComponent};