import React, {FC} from 'react';

import './App.css';
import Products from "./components/products/products";

const App: FC = () => {
  return (
    <div className={'bodyProducts'}>
      <Products/>
    </div>
  );
}

export default App;
