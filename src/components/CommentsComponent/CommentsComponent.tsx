import React, {FC} from 'react';
import {CommentComponent} from "../CommentComponent/CommentComponent";
import {ICommentModel} from "../../model/ICommentModel";

interface IProps{
    comments:ICommentModel[]
}
const CommentsComponent: FC<IProps> = ({comments}) => {

    return (
        <>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </>
    );
};

export {CommentsComponent}