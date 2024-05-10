import React from "react";
import "./App.css";
import { Counter, PostList, UserList } from "./components";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <PostList /> */}
      <UserList />
    </div>
  );
}

export default App;
