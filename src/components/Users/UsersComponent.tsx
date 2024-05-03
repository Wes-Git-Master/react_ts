import React, {useEffect, useState} from 'react';
import {IUserProps} from "../../models/IUserModel";
import {UserComponent} from "../User/UserComponent";
import {requests} from "../../services/dj.api.service";

const UsersComponent = () => {

    const [users,setUsers]= useState<IUserProps[]>([])

    useEffect(() => {
        requests.users.getAllUsers().then(({data}) => setUsers(data))
    },[])

    return (
        <div>
            {users.map((user) => (<UserComponent user={user}/>))}
        </div>
    );
};

export {UsersComponent};