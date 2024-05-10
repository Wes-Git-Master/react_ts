import React from 'react';
import './App.css';
import A from "./components/A";
import B from "./components/B";


const App = () => {
    return (
        <div>

            <A foobar={'olololo'}/>
            <B/>

        </div>
    );
};

export default App;
