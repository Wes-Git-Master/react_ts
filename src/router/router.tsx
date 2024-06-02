import {createBrowserRouter} from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";
import MainLayout from "../layouts/MainLayout";


export const routerConfig = createBrowserRouter([
    {
        // /users
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>wtf are you doing maaaaan????</h1>,
        children: [
            {index: true, element: <AuthPage/>},
            {path: 'cars', element: <CarsPage/>}
        ]
    },


])
