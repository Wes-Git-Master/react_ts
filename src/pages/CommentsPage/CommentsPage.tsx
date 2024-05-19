import React from 'react';
import {CommentsComponent} from "../../components/CommentsComponent/CommentsComponent";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <CommentsComponent/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};