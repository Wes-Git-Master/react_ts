import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface IProps {
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            <hr/>
            {comment.id}
            <br/>
            <p>{comment.body}</p>

        </div>
    );
};

export {CommentComponent};