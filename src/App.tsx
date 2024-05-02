import React, {useState} from 'react';
import './App.css';
import Carts from "./components/Carts/Carts";
import {ProductModel} from "./models/ProductModel";
import Products from "./components/products/Products";


const App = () => {

    const [products, setProducts] = useState<ProductModel[]>([])

    const getProductsFromCart = (products: ProductModel[]) => {
        setProducts(products);
    }
    return (
        <div>
            <Carts getProductsFromCart={getProductsFromCart}/>

            <Products items={products}/>
        </div>
    );
};

export default App;
