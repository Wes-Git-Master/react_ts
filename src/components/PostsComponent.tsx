import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import {PostComponent} from "./PostComponent";
import {requests} from "../services/dj.api.service";

const PostsComponent = () => {

    const [posts,setPosts] = useState<IPostModel[]>([]);

    useEffect(()=>{
        requests.posts.getAllPosts().then(({data}) => console.log(data))
    },[])
    return (
        <div>
            {
                posts.map((post) => (<PostComponent post={post}/>))
            }
        </div>
    );
};

export {PostsComponent};