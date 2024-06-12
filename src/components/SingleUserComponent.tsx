import React, {FC} from 'react';
import {IUser} from "../models/IUser";

interface IProps {
    user: IUser
}

const SingleUserComponent: FC<IProps> = ({user}) => {
    return (
        <div>

            <div>
                {user.name} {user.username} <br/> email: {user.email}
            </div>

        </div>
    );
};

export {SingleUserComponent};