import React from 'react';
import {useContextProvider} from "../context/ContextProvider";
import {UserComponent} from "./UserComponent";

const UsersComponent = () => {

    const {userStore:{allUsers}} = useContextProvider();


    return (
        <div>
            {
                allUsers.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export {UsersComponent};