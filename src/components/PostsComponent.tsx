import React from 'react';
import {useAppSelector} from "../redux/store";
import {PostComponent} from "./PostComponent";

const PostsComponent = () => {

    const {posts} = useAppSelector(state => state.postSlice);

    return (
        <div>

            {
                posts.map(post => <PostComponent post={post} key={post.id}/>)
            }

        </div>
    );
};

export {PostsComponent};