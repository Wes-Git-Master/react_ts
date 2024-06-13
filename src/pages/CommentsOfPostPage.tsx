import React, {useEffect} from 'react';
import {CommentsOfPostComponent} from "../components/CommentsOfPostComponent";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slices/commentSlice";

const CommentsOfPostPage = () => {

    const {id} = useParams();
    const dispatch = useAppDispatch();
    const commentsOfPost = useAppSelector(state => state.commentSlice.comments);

    useEffect(() => {
        if (id) {
            dispatch(commentActions.loadCommentsByPostId(id))
        }
    }, [id]);

    /********************************************************************************************************/

    return (
        <div>

            {
                commentsOfPost ?
                    commentsOfPost.map(comment => <CommentsOfPostComponent comment={comment} key={comment.id}/>)
                    : <h2>Loading ...</h2>
            }

        </div>
    );
};

export {CommentsOfPostPage};