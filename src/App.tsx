import React, {useState} from 'react';

import './App.css';

import {PostsComponent} from "./components/PostsComponent";
import {CommentsComponent} from "./components/CommentsComponent";
import {requests} from "./services/dj.api.service";
import {ICommentModel} from "./models/ICommentModel";

const App = () => {

    const [comments, setComments] = useState<ICommentModel[]>([]);

    const lift = (postId: number) => {
        requests.comments.getAllCommentsOfSinglePost(postId).then(({data}) => setComments(data.comments))
    }


    return (
        <div className='App'>
            <div className={'posts'}><PostsComponent lift={lift}/></div>
            <div className={'comments'}><CommentsComponent comments={comments}/></div>

        </div>
    );
}

export default App;
