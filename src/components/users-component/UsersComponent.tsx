import React, {FC, useEffect, useState} from 'react';
import {UsersResponseModel} from "../../models/response-models/UsersResponseModel";
import {getAllUsers} from "../../services/user.api.service";
import {UserBasicModel} from "../../models/basic-models/UserBasicModel";
import UserComponent from "../user-component/UserComponent";

interface IProps{
    choseUser: (id: number) => void
}

const UsersComponent:FC<IProps> = ({choseUser}) => {

    const [users, setUsers] = useState<UserBasicModel[]>([]);

    useEffect(() => {
        getAllUsers()
            .then((value: UsersResponseModel) => setUsers([...value.users]));

    }, []);
    return (
        <div>
            {
                users.map(user =>
                    <UserComponent
                        key={user.id}
                        user={user}
                        choseUser={choseUser}
                    />)
            }
        </div>
    );
};

export default UsersComponent;
