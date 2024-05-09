import React, {FC, useEffect, useState} from 'react';
import {ICartPropsModel} from "../../models/CartModel/ICartModel";
import {requests} from "../../services/dj.api.service";
import {CartComponent} from "../Cart/CartComponent";

interface IProps{
    id: number
}
const CartsComponent:FC<IProps> = ({id}) => {

    const [carts,setCarts] = useState<ICartPropsModel[]>([]);

    useEffect(()=>{
        requests.carts.getCartOfSingleUser(id).then(({data:{carts}}) => setCarts(carts))
    },[])

    return (
        <div>
            {carts.map(cart => (<CartComponent key={cart.id} cart={cart}/>))}
            
        </div>
    );
};

export {CartsComponent};