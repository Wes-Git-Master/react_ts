import React, {FC, useEffect, useState} from 'react';
import {CartModel} from "../../models/CartModel";
import {getAllCarts} from "../../services/dummy.api.service";
import Cart from "../Cart/Cart";
import {ProductModel} from "../../models/ProductModel";

interface IProps {
    getProductsFromCart: (products: ProductModel[]) => void
}

const Carts: FC<IProps> = ({getProductsFromCart}) => {

    const [carts, setCarts] = useState<CartModel[]>([]);

    useEffect(() => {
        getAllCarts().then(({data: {carts}}) => {
            setCarts(carts);
        });
    }, []);


    return (
        <div>

            {
                carts
                    .map(
                        value => (
                            <Cart
                                key={value.id}
                                getProductsFromCart={getProductsFromCart}
                                item={value}/>
                        )
                    )
            }

        </div>
    );
};

export default Carts;
