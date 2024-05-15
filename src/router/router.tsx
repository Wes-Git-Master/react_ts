import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import React from "react";
import {HomePage} from "../pages/HomePage/HomePage";
import {UsersComponent} from "../components/UsersComponent/UsersComponent";

export const routerConfig = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {index:true, element: <HomePage/>},
                {path: 'users', element: <UsersComponent/>}
            ]
        },
    ]
)