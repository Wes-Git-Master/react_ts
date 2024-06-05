import React, {FC, useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import {HeaderComponent} from "./components/HeaderComponent";
import {useStore} from "./context/store";
import {userService} from "./services/user.api.service";

const App: FC = () => {

    const {userSlice} = useStore();

    useEffect(() => {
        userService.getUsers().then(value => userSlice.loudUsers(value.data))
    }, [userSlice]);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <hr/>
            {userSlice.favoriteUser && <div>{userSlice.favoriteUser.email}</div>}
            <hr/>
        </div>
    );
};

export default App;
