import React, {FC, useEffect, useState} from 'react';

import {requests} from "../../services/dj.api.service";

import {UserComponent} from "../User/UserComponent";
import {IUserPropsModel} from "../../models/IUserModel";


const UsersComponent: FC = () => {

    const [users, setUsers] = useState<IUserPropsModel[]>([]);

    useEffect(() => {
        requests.users.getAllUsers().then(({data:{users}}) => setUsers(users))

    }, [])

    return (
        <div>
            {
                users.map(value => (<UserComponent user={value} />))
            }

        </div>
    );
};

export {UsersComponent};