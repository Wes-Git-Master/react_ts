import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import {HeaderComponent} from "./components/HeaderComponent";
import {Context} from "./context/ContextProvider";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {postService, userService} from "./services/api.service";

const App: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data))
        postService.getPosts().then(value => setPosts(value.data))
    }, []);

    const lift = (obj: IUserModel) => {
        setFavoriteUserState(obj)
    }

    return (
        <div>
            <HeaderComponent/>

            <Context.Provider value={
                {
                    userStore: {
                        allUsers: users,
                        setFavoriteUser: (obj: IUserModel) => {lift(obj)}
                    },
                    postStore: {
                        allPosts: posts
                    }
                }

            }>
                <Outlet/>
            </Context.Provider>

            <hr/>
            {favoriteUserState && <div>{favoriteUserState.email}</div>}
            <hr/>
        </div>
    );
};

export default App;
