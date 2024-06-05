import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import {HeaderComponent} from "./components/HeaderComponent";
import {Context} from "./context/ContextProvider";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {userService} from "./services/user.api.service";
import {ICommentModel} from "./models/ICommentModel";
import {postService} from "./services/post.api.service";
import {commentService} from "./services/comment.api.service";

const App: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([]);
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data))
        postService.getPosts().then(value => setPosts(value.data))
        commentService.getComments().then(value => setComments(value.data))
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
                        setFavoriteUser: (obj: IUserModel) => {
                            lift(obj)
                        }
                    },
                    postStore: {
                        allPosts: posts
                    },
                    commentStore: {
                        allComments: comments
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
