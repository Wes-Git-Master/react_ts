import React, {FC} from 'react';
import {ICommentModel} from "../../model/ICommentModel";

interface IProps {
    comment: ICommentModel
}

type IPropsType = IProps & { children?: React.ReactNode }
const CommentComponent: FC<IPropsType> = ({comment}) => {
    return (
        <>
            <h4>commentId : {comment.id}</h4>
            name: {comment.name}
            <br/>
            <p>body: {comment.body}</p>

        </>
    );
};

export {CommentComponent};