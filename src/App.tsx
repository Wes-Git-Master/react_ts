import React, {useState} from 'react';
import './App.css';
import {UserComponent} from "./components/UserComponent/UserComponent";
import Menu from "./components/menu/menu";



const App = () => {

    const [id,setId] = useState<number>(1);

    const incrementID = () => {
        setId(prevState => ++prevState)
    }

    return (
        <div>
            <Menu/>
            <UserComponent id={id}/>
            <button onClick={incrementID}>increment id</button>
        </div>
    );
};

export default App;
