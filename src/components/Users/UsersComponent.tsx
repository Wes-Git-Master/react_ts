import React, {FC, useEffect, useState} from 'react';
import {IUserPropsModel} from "../../models/UserModel/IUserModel";
import requests from "../../services/dj.api.service";
import {UserComponent} from "../User/UserComponent";

const UsersComponent:FC<IUserPropsModel[]> = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        requests.users.getAllUsers().then(value => setUsers(users))

    },[])

    return (
        <div>
            {
                users.map(users=> <UserComponent/>)
            }
            
        </div>
    );
};

export {UsersComponent};