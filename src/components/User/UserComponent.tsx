import React, {FC} from 'react';
import {IUserPropsModel} from "../../models/UserModel/IUserModel";

interface IProps {
    user: IUserPropsModel
}

const UserComponent: FC<IProps> = ({user}) => {


    return (
        <div>
            <hr/>
            <p>{user.id}</p>
            <hr/>
            <p>{user.age}</p>
            <hr/>
            <p>{user.firstName}</p>


        </div>
    );
};

export {UserComponent};