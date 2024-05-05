import React, {FC, useEffect, useState} from 'react';
import {IUserProps} from "../../models/IUserModel";
import {UserComponent} from "../User/UserComponent";
import {requests} from "../../services/dj.api.service";

type IPropsType = {lift?:(userId:number)=> void}

const UsersComponent:FC<IPropsType> = ({lift}) => {

    const [users,setUsers]= useState<IUserProps[]>([])
    // console.log(users)
    useEffect(() => {
        requests.users.getAllUsers().then(({data:{users}}) => setUsers(users))
    },[])
    return (
        <div>
            {users.map(value => (<UserComponent key={value.id} user={value} lift={lift}/>))}
        </div>
    );
};

export {UsersComponent};