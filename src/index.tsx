import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {AboutPage} from "./pages/about/AboutPage";
import {ContactsPage} from "./pages/contacts/ContactsPage";
import {ErrorLayout} from "./layouts/error/ErrorLayout";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement:<ErrorLayout/>,
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
                index: true, element: <AboutPage/>
            }
        ]

    }
])

root.render(
    <RouterProvider router={browserRouter}/>
);




