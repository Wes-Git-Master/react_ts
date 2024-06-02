import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
