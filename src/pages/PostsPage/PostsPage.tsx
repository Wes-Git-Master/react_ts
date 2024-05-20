import React, {useEffect, useState} from 'react';
import {PostsComponent} from "../../components/PostsComponent/PostsComponent";
import {useParams} from "react-router-dom";
import {IPostModel} from "../../model/IPostModel";
import {requests} from "../../services/api.service";


const PostsPage = () => {

    const {id: userId} = useParams();

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        if (userId) {
            requests.postApiService.getPostsOfSingleUser(userId).then(value => setPosts(value.data))
        }

    }, [userId]);

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export {PostsPage};