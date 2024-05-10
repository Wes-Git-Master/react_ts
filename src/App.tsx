import React, {useEffect, useState} from 'react';
import './App.css';
import ChildComponent1 from "./components/ChildComponent1";
import {getUsers} from "./services/axios.service";
import {User} from "./models/User";


const App = () => {

    const foobar = (arg1: any) => {
        console.log(arg1);
    }

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data);
        });
    }, []);

    return (
        <div>
            {/*<ChildComponent1 item={100500} foobar={foobar}/>*/}

            {
                users.map(value => {
                    return <div>{value.username}</div>
                })
            }
        </div>
    );
};

export default App;
