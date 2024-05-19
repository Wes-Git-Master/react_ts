import React from 'react';
import {UsersComponent} from "../../components/UsersComponent/UsersComponent";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};