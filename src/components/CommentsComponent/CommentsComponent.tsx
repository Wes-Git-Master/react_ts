import React, {FC, useEffect, useState} from 'react';
import {requests} from "../../services/api.service";
import {ICommentModel} from "../../model/ICommentModel";
import {CommentComponent} from "../CommentComponent/CommentComponent";

const CommentsComponent: FC = () => {

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        requests.commentApiService.getAllComments().then(value => setComments(value.data))
    }, []);

    return (
        <>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </>
    );
};

export {CommentsComponent}