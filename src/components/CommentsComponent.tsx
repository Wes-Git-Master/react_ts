import React from 'react';
import {CommentComponent} from "./CommentComponent";
import {useStore} from "../context/store";


const CommentsComponent = () => {

    const {commentSlice:{allComments}} = useStore();

    return (
        <div>
            {
                allComments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export {CommentsComponent};