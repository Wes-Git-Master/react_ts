import React from 'react';
import './App.css';
import ChildComponent1 from "./components/ChildComponent1";


const App = () => {

    const foobar = (arg1: any) => {
        console.log(arg1);
    }

    return (
        <div>
            <ChildComponent1 foobar={foobar}/>
        </div>
    );
};

export default App;
