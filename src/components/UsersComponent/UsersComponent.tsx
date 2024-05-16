import React, {FC, useEffect, useState} from 'react';
import {requests} from "../../services/api.service";
import {IUserModel} from "../../model/IUserModel";
import {UserComponent} from "../UserComponent/UserComponent";

const UsersComponent: FC = () => {

    const [users,setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
           requests.userApiService.getAllUsers().then(({data}) => setUsers(data))
        }, []);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export {UsersComponent};