import React, {FC} from 'react';

import './App.css';
import {Counter, PostList} from "./components";

const App: FC = () => {
  return (
    <div className={"App"}>
        <Counter/>
        <PostList/>
    </div>
  );
}

export default App;
