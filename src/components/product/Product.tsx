import React, {FC} from 'react';

import styles from './product.module.css';

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
        <div className={styles.content}>

            <h1 className={styles.titles}>{title}</h1>
            <h3 className={styles.descriptions}>{description}</h3>
            <ul className={styles.productUl}>
                <li className={styles.productLi}>price: {price}</li>
                <li className={styles.productLi}>discountPercentage: {discountPercentage}</li>
                <li className={styles.productLi}>rating: {rating}</li>
                <li className={styles.productLi}>stock: {stock}</li>
                <li className={styles.productLi}>brand: {brand}</li>
                <li className={styles.productLi}>category: {category}</li>
            </ul>

            <div>
                {
                    images?.map((image, index) => <div key={index} className={styles.productImageBox}><img className={styles.productImage}  src={image} alt={title}/></div>)
                }
            </div>

        </div>
    );
};

export default Product;