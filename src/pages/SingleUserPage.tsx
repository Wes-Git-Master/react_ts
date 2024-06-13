import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";
import {SingleUserComponent} from "../components/SingleUserComponent";

const SingleUserPage = () => {

    const {id} = useParams();
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.userSlice.user);

    useEffect(() => {
        if (id) {
            dispatch(userActions.loadUserById(id))
        }
    }, [id]);

    /********************************************************************************************************/

    return (
        <div>
            {
                user && <SingleUserComponent user={user}/>
            }
        </div>
    );
};

export {SingleUserPage};