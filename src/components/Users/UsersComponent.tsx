import React, {useEffect, useState} from 'react';
import {IUserProps} from "../../models/IUserModel";
import {UserComponent} from "../User/UserComponent";
import {requests} from "../../services/dj.api.service";

const UsersComponent = () => {

    const [users,setUsers]= useState<IUserProps[]>([])

    useEffect(() => {
        requests.users.getAllUsers().then(({data:{users}}) => setUsers(users))
    },[])

    return (
        <div>
            {users.map(value => (<UserComponent key={value.id} user={value}/>))}
        </div>
    );
};

export {UsersComponent};