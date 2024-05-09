import React, {FC} from 'react';

import './App.css';

import {UsersComponent} from "./components/Users/UsersComponent";
import {requests} from "./services/dj.api.service";
import {CartsComponent} from "./components/Carts/CartsComponent";


const App: FC = () => {

    const lift = (userId:number) => {
            requests.carts.getCartOfSingleUser(userId).then(({data}) => {
                console.log(data)
            })
    }

    return (
        <>
            <UsersComponent lift={lift}/>
            <CartsComponent id={id}/>
        </>
    );
}

export default App;
