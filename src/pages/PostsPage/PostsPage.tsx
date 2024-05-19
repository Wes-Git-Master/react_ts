import React from 'react';
import {PostsComponent} from "../../components/PostsComponent/PostsComponent";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <PostsComponent/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};