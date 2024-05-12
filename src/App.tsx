import React, {useCallback, useState} from 'react';
import './App.css';
import {UserComponent} from "./components/UserComponent/UserComponent";
import Menu from "./components/menu/menu";


const App = () => {

    const [id, setId] = useState<number>(1);

    const incrementID = () => {
        setId(prevState => ++prevState)
    }

    const someFunction =  useCallback(() => {
        console.log('asd')
    },[])

    return (
        <div>
            <Menu someFunction={someFunction}/>
            <UserComponent id={id}/>
            <button onClick={incrementID}>increment id</button>
        </div>
    );
};

export default App;
