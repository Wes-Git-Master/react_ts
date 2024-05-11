import React, {FC} from 'react';
import './App.css';
import {useFetch} from "./custom-hooks/useFetch";


interface IUser{
    name: string
}

const App:FC = () => {
    
    const users = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/','/users',[]);


    return (
        <div>

            {
                users.map((user,index) => (<div key={index}>{user.name}</div>))
            }


        </div>
    );
};

export default App;
