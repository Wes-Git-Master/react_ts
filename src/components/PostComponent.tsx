import React, {FC} from 'react';
import {IPost} from "../models/IPost";

export interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <h4> {post.title} </h4>
            <p> {post.body} </p>
            postId: {post.id}
            <button> comments </button>
        </div>
    );
};

export {PostComponent};