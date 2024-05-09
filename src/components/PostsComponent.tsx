import React, { useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import {PostComponent} from "./PostComponent";
import {requests} from "../services/dj.api.service";

const PostsComponent = () => {

    const [posts,setPosts] = useState<IPostModel[]>([]);

    useEffect(()=>{
        requests.posts.getAllPosts().then(value => console.log(value))
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