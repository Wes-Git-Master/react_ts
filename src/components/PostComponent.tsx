import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface IProps {
    post: IPostModel
}

type IPropsType = IProps & { children?:React.ReactNode }
const PostComponent:FC<IPropsType> = ({post}) => {
    return (
        <div>
            <hr/>
            <p>postId - {post.id}</p>
            <p>tittle - {post.title}</p>
            {/*<p>body - {post.body}</p>*/}
            <p>userId - {post.userId}</p>
            <p>tags - {post.tags}</p>
            <p>reactions - {post.reactions}</p>

        </div>
    );
};

export {PostComponent};