import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface IProps {
    post: IPostModel
}

type IPropsType = IProps & { children?:React.ReactNode }
const PostComponent:FC<IPropsType> = ({post}) => {
    return (
        <div>
            <p>postId - {post.id}</p>
            <p>body - {post.title}</p>
            <p>{post.body}</p>
            <p>{post.userId}</p>
            <p>{post.tags}</p>
            <p>{post.reactions}</p>

        </div>
    );
};

export {PostComponent};