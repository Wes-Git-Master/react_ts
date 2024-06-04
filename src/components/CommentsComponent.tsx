import React from 'react';
import {CommentComponent} from "./CommentComponent";
import {useContextProvider} from "../context/ContextProvider";

const CommentsComponent = () => {

    const {commentStore: {allComments}} = useContextProvider();

    return (
        <div>
            {
                allComments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }

        </div>
    );
};

export {CommentsComponent};