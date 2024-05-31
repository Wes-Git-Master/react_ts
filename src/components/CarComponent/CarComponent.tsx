import React, {FC} from 'react';
import {ICarWithAuth} from "../../models/cars models/ICarWithAuth";
import styles from "../../styles/car styles/car.module.css"

interface ICarProps {
    car: ICarWithAuth
}

const CarComponent: FC<ICarProps> = ({car}) => {

    /*******************************************************************************************/

    return (
        <div>
            <div className={styles.carBlock}>
                <img src={car.photo} alt={car.brand}/>
                <ul>
                    <li>id: {car.id}</li>
                    <li>brand: {car.brand}</li>
                    <li>year: {car.year}</li>
                    <li>price: {car.price}</li>
                </ul>
            </div>
        </div>
    );
};

export {CarComponent};