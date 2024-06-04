import React, {useEffect, useMemo, useState} from 'react';
import {UserPostsComponent} from "../components/UserPostsComponent";
import {useContextProvider} from "../context/ContextProvider";
import {IUserWithPostsType} from "../models/IUserWithPostsType";

const UserPostsPage = () => {

    const {userStore: {allUsers}, postStore: {allPosts}} = useContextProvider();

    const [userWithPostsState,setUserWithPostsState] = useState<IUserWithPostsType[]>([]);

    const userWithPostsArray = useMemo(() => {
        return allUsers.map(user => {
            return {...user, posts: allPosts.filter(post => post.userId === user.id)}
        })
    }, [allUsers,allPosts])

    useEffect(() => {
            setUserWithPostsState(userWithPostsArray)
            }, [userWithPostsArray]);

    return (
        <div>
            <UserPostsComponent items={userWithPostsState}/>
        </div>
    );
};

export {UserPostsPage};