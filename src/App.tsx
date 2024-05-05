import React, {FC, useState} from 'react';

import './App.css';

import {UsersComponent} from "./components/Users/UsersComponent";
import {requests} from "./services/dj.api.service";
import {IPostProps} from "./models/IPostModel";
import {PostsComponent} from "./components/Posts/PostsComponent";


const App: FC = () => {

    const [posts, setPosts] = useState<IPostProps[]>([])

    const lift = (userId: number) => {
        requests.posts.getAllPostsOfSingleUser(userId).then(({data}) => {
            // console.log(data)
            setPosts(data)
        })
    }

    return (
        <>
            <UsersComponent lift={lift}/>
            <PostsComponent posts={posts}/>
        </>
    );
}

export default App;
