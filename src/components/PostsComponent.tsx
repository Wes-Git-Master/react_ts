import React from 'react';

import PostComponent from "./PostComponent";
import {useStore} from "../context/ContextProvider";

const PostsComponent = () => {
    const {postSlice: {allPosts}} = useStore();

    return (
        <div>
            {
                allPosts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;
