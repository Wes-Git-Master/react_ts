import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../context/ContextProvider";
import {PostWithCommentsType} from "../models/PostWithCommentsType";
import {PostCommentsComponent} from "../components/PostCommentsComponent";

const PostCommentsPage = () => {

    const {postStore: {allPosts}, commentStore: {allComments}} = useContextProvider();

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