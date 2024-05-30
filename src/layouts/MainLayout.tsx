import React from 'react';
import {Outlet} from "react-router-dom";
import {HeaderComponent} from "../components/header/HeaderComponent";
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