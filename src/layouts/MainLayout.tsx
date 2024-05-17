import React from 'react';
import {HeaderComponent} from "../components/header/HeaderComponent";
import {Outlet} from "react-router-dom";
import {FooterComponent} from "../components/footer/FooterComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export {MainLayout};