import React, {FC} from 'react';
import {IComment} from "../models/IComment";

interface IProps {
    comment: IComment
}

const CommentsOfPostComponent: FC<IProps> = ({comment}) => {

    return (
        <div>

            <b>id: {comment.id}</b>
            <p><i>{comment.body}</i></p>

        </div>
    );
};

export {CommentsOfPostComponent};