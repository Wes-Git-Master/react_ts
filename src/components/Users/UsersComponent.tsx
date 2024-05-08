import React, {FC, useEffect, useState} from 'react';

import {requests} from "../../services/dj.api.service";

import {UserComponent} from "../User/UserComponent";
import {IUserPropsModel} from "../../models/IUserModel";




const UsersComponent:FC<IUserPropsModel> = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        requests.users.getAllUsers().then(value => console.log(value.data))

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