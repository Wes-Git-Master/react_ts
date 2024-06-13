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
            <hr/>
            <h3>{post.title} </h3>
            <i>{post.body}</i>
            <p>id: {post.id}</p>
            <button onClick={() => {
                navigate(`${post.id}`)
            }}> comments
            </button>

        </div>
    );
};

export {PostComponent};