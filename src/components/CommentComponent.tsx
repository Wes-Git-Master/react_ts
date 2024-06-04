import React, {FC} from 'react';
import {ICommentModel} from "../models/ICommentModel";

interface IProps {
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment}) => {
    return (
        <div>
            <p> id: {comment.id} <br/> {comment.body} </p>
        </div>
    );
};

export {CommentComponent};