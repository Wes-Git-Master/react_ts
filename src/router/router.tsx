import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";


export const routerConfig = createBrowserRouter([
    {
        // /users
        path: '/',
        element: <MainLayout/>,
        errorElement:<h1>wtf are you doing maaaaan????</h1>,
        children: [ /*child is - Outlet in your layout*/
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersComponent/>}
        ]
    },

    // {path: '/another', element: <AnotherLayout/>},


])
