import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import {PostComponent} from "./PostComponent";
import {requests} from "../services/dj.api.service";

type IPropsType = { lift?: (postId:number) => void }

const PostsComponent:FC<IPropsType> = ({lift}) => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        requests.posts.getAllPosts().then(({data}) => setPosts(data.posts))
    }, []);
    return (
        <div>
            {
                posts.map((post) => (<PostComponent key={post.id} post={post} lift={lift}/>))
            }
        </div>
    );
};

export {PostsComponent};