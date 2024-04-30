import React, {FC} from 'react';

import './App.css';

import styles from './components/product/product.module.css'

import Products from "./components/products/products";

const App: FC = () => {
  return (
    <div className={styles.bodyProducts}>
      <Products/>
    </div>
  );
}

export default App;
