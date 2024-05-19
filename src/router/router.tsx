import React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage";
import {HomePage} from "../pages/HomePage/HomePage";
import {UsersPage} from "../pages/UsersPage/UsersPage";
import {PostsPage} from "../pages/PostsPage/PostsPage";
import {CommentsPage} from "../pages/CommentsPage/CommentsPage";

export const routerConfig = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    index: true,
                    element: <HomePage/>
                },
                {
                    path: 'users',
                    element: <UsersPage/>
                },
                {
                    path: 'posts',
                    element: <PostsPage/>
                },
                {
                    path: 'comments',
                    element: <CommentsPage/>
                }
            ]
        }
    ]
)