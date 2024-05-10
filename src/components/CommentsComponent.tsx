import React, {FC} from 'react';

import {CommentComponent} from "./CommentComponent";
import {ICommentModel} from "../models/ICommentModel";

interface IProps {
    comments: ICommentModel[]
}
const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map(comments => (<CommentComponent key={comments.id} comment={comments}/>))
            }
            
        </div>
    );
};

export {CommentsComponent};