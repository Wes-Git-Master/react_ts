import React, {FC, useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import {HeaderComponent} from "./components/HeaderComponent";
import {useStore} from "./context/store";
import {userService} from "./services/user.api.service";
import {postService} from "./services/post.api.service";
import {commentService} from "./services/comment.api.service";

const App: FC = () => {

    const {userSlice, postSlice, commentSlice} = useStore();

    useEffect(() => {
        userService.getUsers().then(value => userSlice.loudUsers(value.data))
    }, [userSlice]);

    useEffect(() => {
        postService.getPosts().then(value => postSlice.loudPosts(value.data))
    }, [postSlice]);

    useEffect(() => {
        commentService.getComments().then(value => commentSlice.loudComments(value.data))
    }, [commentSlice]);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <hr/>
            {userSlice.favoriteUser && <div>{userSlice.favoriteUser.email}</div>}
            <hr/>
        </div>
    );
};

export default App;
