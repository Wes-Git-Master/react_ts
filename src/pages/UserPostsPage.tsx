import React, {useEffect, useMemo, useState} from 'react';
import {UserPostsComponent} from "../components/UserPostsComponent";
import {IUserWithPostsType} from "../models/IUserWithPostsType";
import {useStore} from "../context/store";

const UserPostsPage = () => {

   const {userSlice:{allUsers},postSlice:{allPosts}} = useStore();

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