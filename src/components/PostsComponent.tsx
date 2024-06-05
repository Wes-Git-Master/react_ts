import React from 'react';
import {PostComponent} from "./PostComponent";
import {useStore} from "../context/store";

const PostsComponent = () => {

    const {postSlice: {allPosts}} = useStore();

    return (
        <div>

            {
                allPosts.map(post => <PostComponent post={post} key={post.id}/>)
            }

        </div>
    );
};

export {PostsComponent};