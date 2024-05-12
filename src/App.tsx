import React, {useMemo, useState} from 'react';
import './App.css';
import {UserComponent} from "./components/UserComponent/UserComponent";
import Menu from "./components/menu/menu";


const App = () => {

    const [id, setId] = useState<number>(1);

    const incrementID = () => {
        setId(prevState => ++prevState)
    }

    const [menuItem1,setmenuItem1] = useState<string>('users');
    const [menuItem2,setmenuItem2] = useState<string>('posts');
    const [menuItem3,setmenuItem3] = useState<string>('comments');
    const links = useMemo(() => {
        return [menuItem1,menuItem2,menuItem3]
    },[menuItem1,menuItem2,menuItem3]);


    return (
        <div>
            <Menu links={links}/>
            <UserComponent id={id}/>
            <button onClick={incrementID}>increment id</button>
        </div>
    );
};

export default App;
