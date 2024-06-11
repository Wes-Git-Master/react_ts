import React, {FC, useEffect} from 'react';
import {postActions, useAppDispatch, useAppSelector, userActions} from "./redux/store";

const App: FC = () => {

    const dispatch = useAppDispatch();

    const {userSlice: {users}, postSlice: {posts}} = useAppSelector(state => state);

    useEffect(() => {
        dispatch(userActions.loadUsers())
        dispatch(postActions.loadPosts())
    }, []);
    return (
        <div>

            {
                users.map(user => <div key={user.id}>{user.id} {user.name}</div>)
            }

            <hr/>

            {
                posts.map(post => <div key={post.id}>{post.id} - {post.body} </div>)
            }

        </div>
    );
};

export {App};