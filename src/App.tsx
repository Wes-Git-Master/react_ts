import React, {FC} from 'react';

import './App.css';
import {ToggleComponent} from "./components/ToggleComponent/ToggleComponent";
import {PreviousComponent} from "./components/PreviousComponent/PreviousComponent";
import {StorageComponent} from "./components/StorageComponent/StorageComponent";



const App: FC = () => {
  return (
    <>
        <ToggleComponent />
        <hr/>
        <PreviousComponent/>
        <hr/>
        <StorageComponent/>
    </>
  );
}

export default App;
