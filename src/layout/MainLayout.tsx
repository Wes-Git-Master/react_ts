import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import {HeaderComponent} from "../components/HeaderComponent/HeaderComponent";
import {FooterComponent} from "../components/FooterComponent/FooterComponent";

const MainLayout: FC = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>

        </div>
    );
};

export default MainLayout;