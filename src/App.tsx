import React from 'react';
import './App.css';
import UsersComponent from "./compoennts/UsersComponent";

const App = () => {

    const lift = (user: any) => {
        console.log(user);
    }

    return (
        <div>

            <UsersComponent lift={lift}/>

            <hr/>

            <hr/>

        </div>
    );
};

export default App;
