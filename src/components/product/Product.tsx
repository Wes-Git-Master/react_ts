import React, {FC} from 'react';

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
    thumbnail: string,
    images: [string]
}


export type IProductTypeProps = IProductProps & { children?: React.ReactNode };

const Product: FC<IProductTypeProps> = ({
                                            title, description, price,
                                            discountPercentage, rating, stock,
                                            brand, category, thumbnail, images
                                        }) => {
    return (
        <div>

            <h2>{title}</h2>
            <h3>{description}</h3>
            <ul>
                <li>{price}</li>
                <li>{discountPercentage}</li>
                <li>{rating}</li>
                <li>{stock}</li>
                <li>{brand}</li>
                <li>{category}</li>
                <li>{thumbnail}</li>
            </ul>

            <div>
                {
                    images.map((image, index) => <img key={index} src={image} alt={title}/>)
                }
            </div>

        </div>
    );
};

export default Product;