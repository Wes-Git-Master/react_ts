import React, {useState} from 'react';
import './App.css';
import UsersComponent from "./components/users-component/UsersComponent";
import TodosComponent from "./components/todos-component/TodosComponent";


const App = () => {
    const [userId, setUserId] = useState<number>(0);
    const choseUser = (id: number) => {
        setUserId(id);
    }

    return (
        <div>
            <UsersComponent choseUser={choseUser}/>
            {
                !!userId && <TodosComponent userId={userId}/>
            }

        </div>
    );
};

export default App;
