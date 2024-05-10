import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface IProps {
    post: IPostModel
}

type IPropsType = IProps & { children?:React.ReactNode } & { lift?: (postId:number) => void }
const PostComponent:FC<IPropsType> = ({post,lift}) => {

    const onClickHandler = () => {
        if (lift){
            lift(post.id)
        }
    }

    return (
        <div>
            <hr/>
            <p>postId - {post.id}</p>
            <p>tittle - {post.title}</p>
            <p>userId - {post.userId}</p>
            <p>tags - {post.tags}</p>
            <p>reactions - {post.reactions}</p>
            <div>
                <button onClick={onClickHandler}>show comments to post</button>
            </div>

        </div>
    );
};

export {PostComponent};