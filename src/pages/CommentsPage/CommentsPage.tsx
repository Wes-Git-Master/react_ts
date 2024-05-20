import React, {useEffect, useState} from 'react';
import {CommentsComponent} from "../../components/CommentsComponent/CommentsComponent";
import {ICommentModel} from "../../model/ICommentModel";
import {requests} from "../../services/api.service";
import {useParams} from "react-router-dom";


const CommentsPage = () => {

    const {id: postId} = useParams();

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        if (postId) {
            requests.commentApiService.getCommentsOfSinglePost(postId.toString())
                .then(value => setComments(value.data))
        }


    }, [postId]);

    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export {CommentsPage};