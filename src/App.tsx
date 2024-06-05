import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import {HeaderComponent} from "./components/HeaderComponent";
import {Context} from "./context/ContextProvider";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {userService} from "./services/user.api.service";
import {postService} from "./services/post.api.service";

const App: FC = () => {

    const [users,setUsers] = useState<IUserModel[]>([]);
    const [posts,setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data))
        postService.getPosts().then(value => setPosts(value.data))
        }, []);


    return (
        <div>
            <Context.Provider value={
                {
                    userStore: {
                        allUsers: users
                    },
                    postStore: {
                        allPosts: posts
                    }
                }

            }>
                <HeaderComponent/>
                <Outlet/>
            </Context.Provider>
        </div>
    );
};

export default App;
