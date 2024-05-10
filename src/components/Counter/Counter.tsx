import React, { useState } from "react";

import classes from "./Counter.module.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => setCount(count + 1);
  const handleDec = () => setCount(count - 1);

  return (
    <div className={classes.counterWrapper}>
      {count ? count : "no count"}
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
};
