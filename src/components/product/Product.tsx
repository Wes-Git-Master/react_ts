import React, {FC, useEffect, useState} from 'react';
import {ProductModel} from "../../models/ProductModel";
import {getProductById} from "../../services/dummy.api.service";
import {FullProductModel} from "../../models/FullProductModel";

interface IProps {
    id: ProductModel;
}

const Product: FC<IProps> = ({id: {id}}) => {

    const [product, setProduct] = useState<FullProductModel>(null);

    useEffect(() => {
        getProductById(id)
            .then((value) => {

                console.log(value);
                setProduct(value.data);

            });

    }, []);
    return (
        <>
            {
                product && <div>{product.brand}</div>
            }
        </>
    );
};

export default Product;
