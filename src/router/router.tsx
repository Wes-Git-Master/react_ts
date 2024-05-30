import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";


export const routerConfig = createBrowserRouter([
    {
        // /users
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>wtf are you doing maaaaan????</h1>,
        children: [ /*child is - Outlet in your layout*/
            {index: true, element: <HomePage/>},
            {
                path: 'users', element: <UsersPage/>,
                children: [
                    {path: ':id', element: <PostsPage/>}
                ]
            },

        ]
    },

    // {path: '/another', element: <AnotherLayout/>},


])
