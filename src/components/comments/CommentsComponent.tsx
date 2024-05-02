import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";

interface IProps {
    comments: ICommentModel[];
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map((comment: ICommentModel) => (<li key={comment.id}> {comment.body}<br/></li>))
            }
        </div>
    );
};

export default CommentsComponent;
