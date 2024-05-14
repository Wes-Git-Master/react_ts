import React, {FC} from 'react';

import './App.css';
import {FormComponent} from "./components/FormComponent";

const App: FC = () => {

    return (
        <>
            <div contentEditable={true}>Lorem ipsum dolor sit amet.</div>
            <FormComponent/>
        </>
    );
}

export default App;
