import React, {FC, useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import {HeaderComponent} from "./components/HeaderComponent";
import {useStore} from "./context/store";
import {userService} from "./services/user.api.service";
import {postService} from "./services/post.api.service";

const App: FC = () => {

    const {userSlice,postSlice} = useStore();

    useEffect(() => {
        userService.getUsers().then(value => userSlice.loudUsers(value.data))
        postService.getPosts().then(value => postSlice.loudPosts(value.data))
    }, [userSlice]);

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
