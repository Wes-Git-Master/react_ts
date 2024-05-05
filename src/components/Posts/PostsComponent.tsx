import React, {FC} from 'react';
import {IPostProps} from "../../models/IPostModel";

interface IProps {
    posts: IPostProps[]
}
const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map((posts) => (<div key={posts.id}> {posts.body}</div>))}
            
        </div>
    );
};

export {PostsComponent};