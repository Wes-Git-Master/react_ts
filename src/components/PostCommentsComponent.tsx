import React, {FC} from 'react';
import {PostWithCommentsType} from "../models/PostWithCommentsType";

interface IProps {
    items: PostWithCommentsType[]
}

const PostCommentsComponent: FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map(item => <div key={item.id}>
                    <hr/>
                    <p>{item.title}</p>
                    <ul>
                        {
                            item.comments.map((comment) => (<li key={comment.id}>{comment.body}</li>))
                        }
                    </ul>
                </div>)
            }
        </div>
    );
};

export {PostCommentsComponent};