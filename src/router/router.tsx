import React from "react";
import MainLayout from "../layout/MainLayout";
import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../pages/HomePage/HomePage";
import {UsersComponent} from "../components/UsersComponent/UsersComponent";
import {PostsComponent} from "../components/PostsComponent/PostsComponent";
import {CommentsComponent} from "../components/CommentsComponent/CommentsComponent";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage";

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
                    element: <UsersComponent/>
                },
                {
                    path: 'posts',
                    element: <PostsComponent/>
                },
                {
                    path: 'comments',
                    element: <CommentsComponent/>
                }
            ]
        }
    ]
)