import React, {FC} from 'react';
import {IPostModel} from "../model/IPostModel";

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export default PostComponent;
