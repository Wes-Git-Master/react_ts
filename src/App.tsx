import React from 'react';
import './App.css';
import {useFetch} from "./custom-hooks/useFetch";


const App = () => {

    let data = useFetch<{id:number,title:string,body:string}[]>('/posts',[]);
    // let data = useFetch<UserModel[]>('/users', []);
    return (
        <div>
            {
                data.map((item, index) => (<div>{item.id} {item.title}</div>))}

        </div>
    );
};

export default App;
