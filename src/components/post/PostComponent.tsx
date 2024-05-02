import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

interface IProps {
    post: IPostModel;
}

type IPropsType = IProps & { children?: React.ReactNode } & { lift?: (postId: number) => void };


const PostComponent: FC<IPropsType> = ({post, lift}) => {


    const onClickHandler = () => {
        if (lift) {
            lift(post.id);
        }

    };


    return (
        <div>
            {post.id} {post.title}
            <div>
                <button onClick={onClickHandler}>show comments to post</button>
            </div>

            <hr/>

        </div>
    );
};

export default PostComponent;
