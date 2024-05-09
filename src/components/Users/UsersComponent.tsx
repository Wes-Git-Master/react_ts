import React, {FC, useEffect, useState} from 'react';

import {requests} from "../../services/dj.api.service";

import {UserComponent} from "../User/UserComponent";

import {IUserPropsModel} from "../../models/UserModel/IUserModel";

type IPropsType = {lift?: (userId:number) => void}
const UsersComponent: FC<IPropsType> = ({lift}) => {




    const [users, setUsers] = useState<IUserPropsModel[]>([]);

    useEffect(() => {
        requests.users.getAllUsers().then(({data:{users}}) => setUsers(users))

    }, [])

    return (
        <div>
            {
                users.map(user => (<UserComponent key={user.id} user={user} lift={lift}/>))
            }

        </div>
    );
};

export {UsersComponent};