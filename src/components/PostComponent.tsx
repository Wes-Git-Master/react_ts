import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {useNavigate} from "react-router-dom";

export interface IProps {
    post: IPost
}

const PostComponent: FC<IProps> = ({post}) => {

    const navigate = useNavigate();

    return (
        <div>
            <h4> {post.title} </h4>
            <p> {post.body} </p>
            postId: {post.id}
            <button onClick={() => {
                navigate(`${post.id}`)
            }}> comments
            </button>
        </div>
    );
};

export {PostComponent};