import React, {FC} from 'react';
import {IPostModel} from "../../model/IPostModel";
interface IProps{
    post:IPostModel
}
type IPropsType = IProps & { children?: React.ReactNode }
const PostComponent:FC<IPropsType> = ({post}) => {
    return (
        <>
            <h4>postId : {post.id}</h4>
             title : {post.title}
            <br/>
            <p>{post.body}</p>
        </>
    );
};

export {PostComponent}