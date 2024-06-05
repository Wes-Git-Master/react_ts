import React, {useEffect} from 'react';
import {PostsComponent} from "../components/PostsComponent";
import {useStore} from "../context/store";
import {postService} from "../services/post.api.service";

const PostsPage = () => {

    const {postSlice} = useStore();

    useEffect(() => {
            postService.getPosts().then(value => postSlice.loudPosts(value.data))
        }, [postSlice]);

    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export {PostsPage};