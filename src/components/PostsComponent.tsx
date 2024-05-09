import React, {useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import {PostComponent} from "./PostComponent";
import {requests} from "../services/dj.api.service";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        requests.posts.getAllPosts().then(({data}) => setPosts(data.posts))
    }, [])
    return (
        <div>
            {
                posts.map((post) => (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};

export {PostsComponent};