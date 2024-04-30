import React, {FC} from 'react';

import './product.css';

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail?: string,
    images: [string]
}


export type IProductTypeProps = IProductProps & { children?: React.ReactNode };

const Product: FC<IProductTypeProps> = ({
                                            title, description, price,
                                            discountPercentage, rating, stock,
                                            brand, category, images
                                        }) => {
    return (
        <div className={'content'}>

            <h1 className={'titles'}>{title}</h1>
            <h3 className={'descriptions'}>{description}</h3>
            <ul className={'productUl'}>
                <li className={'productLi'}>price: {price}</li>
                <li className={'productLi'}>discountPercentage: {discountPercentage}</li>
                <li className={'productLi'}>rating: {rating}</li>
                <li className={'productLi'}>stock: {stock}</li>
                <li className={'productLi'}>brand: {brand}</li>
                <li className={'productLi'}>category: {category}</li>

            </ul>

            <div>
                {
                    images?.map((image, index) => <div key={index} className={'productImageBox'}><img className={'productImage'}  src={image} alt={title}/></div>)
                }
            </div>

        </div>
    );
};

export default Product;