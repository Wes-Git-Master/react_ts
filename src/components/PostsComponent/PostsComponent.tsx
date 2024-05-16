import React, {FC, useEffect, useState} from 'react';
import {requests} from "../../services/api.service";
import {IPostModel} from "../../model/IPostModel";
import {PostComponent} from "../PostComponent/PostComponent";


const PostsComponent: FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        requests.postApiService.getAllPosts().then(value => setPosts(value.data))
    }, []);

    return (
        <>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </>
    );
};

export {PostsComponent};