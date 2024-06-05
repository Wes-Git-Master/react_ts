import React, {useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {useStore} from "./context/ContextProvider";
import {userService} from "./services/api.service";


const App = () => {

    const {userSlice, userSlice: {favoriteUser}} = useStore();

    useEffect(() => {
        userService.getUsers().then(value => userSlice.loadUsers(value.data));
    },[]);


    return (
        <div>
            <HeaderComponent/>
            <Outlet/>

            <hr/>
            {favoriteUser && <div>{favoriteUser.email}</div>}
            <hr/>


        </div>
    );
};

export default App;
