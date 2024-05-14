import React, {FC} from 'react';

import './App.css';
import {FormComponent2} from "./components/FormComponent2";
import {FormComponent} from "./components/FormComponent";

const App: FC = () => {

    return (
        <>
            <div contentEditable={true}>Lorem ipsum dolor sit amet.</div>
            {/*<FormComponent/>*/}
            <FormComponent2/>
        </>
    );
}

export default App;
