import React, {FC} from 'react';

import {IUserProps} from "../../models/IUserModel";

interface IProps {
    user: IUserProps
}

type IPropsType = IProps & { children?: React.ReactNode }

const UserComponent:FC<IPropsType> = ({user}) => {
    return (
        <div>
            {user.id} {user.age} {user.firstName}
            <img src={user.image} alt="#"/>

        </div>
    );
};

export {UserComponent};