import React, {FC, useState} from 'react';

import './App.css';

import {UsersComponent} from "./components/Users/UsersComponent";
import {requests} from "./services/dj.api.service";
import {IPostProps} from "./models/IPostModel";
import {PostsComponent} from "./components/Posts/PostsComponent";
import style from "../src/styles/style.module.css"



const App: FC = () => {

    const [posts, setPosts] = useState<IPostProps[]>([])

    const lift = (userId: number) => {
        requests.posts.getAllPostsOfSingleUser(userId).then(({data}) => {
            // console.log(data.posts)
            setPosts(data.posts)
        })
    }

    return (
        <div className={style.box}>
            <UsersComponent lift={lift}/>
            <PostsComponent posts={posts}/>
        </div>
    );
}

export default App;
