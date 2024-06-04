import React, {FC} from 'react';
import {PostWithCommentsType} from "../models/PostWithCommentsType";

interface IProps {
    items: PostWithCommentsType[],
}

const PostCommentsComponent: FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map(item => <div key={item.id}>
                    <div>
                        <p> user: {item.userId}</p>
                        <b>{item.title}</b>
                    </div>

                    <ul>
                        <hr/>
                        {item.comments.map((comment) => (<li key={comment.id}>{comment.body}</li>))}
                        <hr/>
                    </ul>

                </div>)
            }
        </div>
    );
};

export {PostCommentsComponent};