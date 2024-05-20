import React, {FC} from 'react';
import {IPostModel} from "../../model/IPostModel";
import {PostComponent} from "../PostComponent/PostComponent";

interface IProps {
    posts: IPostModel[]
}

const PostsComponent: FC<IProps> = ({posts}) => {

    return (
        <>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </>
    );
};

export {PostsComponent};