import React, {useEffect, useMemo, useState} from 'react';
import {PostCommentsComponent} from "../components/PostCommentsComponent";
import {useStore} from "../context/store";
import {PostWithCommentsType} from "../models/PostWithCommentsType";

const PostCommentsPage = () => {

    const {postSlice: {allPosts}, commentSlice: {allComments}} = useStore();

    const [postWithCommentsState, setPostWithCommentsState] = useState<PostWithCommentsType[]>([]);

    const postWithCommentsArray = useMemo(() => {
        return allPosts.map(post => {
            return {...post, comments: allComments.filter(comment => comment.postId === post.id)}
        })
    }, [allPosts, allComments])

    useEffect(() => {
        setPostWithCommentsState(postWithCommentsArray)
    }, [postWithCommentsArray]);

    return (
        <div>
            <PostCommentsComponent items={postWithCommentsState}/>
        </div>
    );
};

export {PostCommentsPage};