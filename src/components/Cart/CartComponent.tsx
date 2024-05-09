import React, {FC} from 'react';
import {ICartPropsModel} from "../../models/CartModel/ICartModel";

interface IProps{
    cart: ICartPropsModel
}

type IPropsType = IProps & {children?:React.ReactNode}
const CartComponent:FC<IPropsType> = ({cart}) => {
    return (
        <div>
            {cart.userId}
            
        </div>
    );
};

export {CartComponent};