import React from 'react';
import UsersComponent from "../components/UsersComponent";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <hr/>
            <Outlet/>


        </div>
    );
};

export default UsersPage;
