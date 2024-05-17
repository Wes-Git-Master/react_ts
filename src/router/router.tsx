import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {ErrorLayout} from "../layouts/error/ErrorLayout";
import {AboutPage} from "../pages/about/AboutPage";
import {ContactsPage} from "../pages/contacts/ContactsPage";
import {SingleContactPage} from "../pages/contact/SingleContactPage";

export let routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {
                path: 'about',
                element: <AboutPage/>
            },
            {
                path: 'contacts',
                element: <ContactsPage/>
            },
            {
                path: 'contacts/:id',
                element: <SingleContactPage/>
            },
            {
                index: true, element: <AboutPage/>
            }
        ]

    }
])