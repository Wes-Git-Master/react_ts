import React from 'react';
import {UserComponent} from "./UserComponent";
import {useStore} from "../context/store";

const UsersComponent = () => {

    const {userSlice: {allUsers}} = useStore();


    return (
        <div>
            {
                allUsers.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export {UsersComponent};