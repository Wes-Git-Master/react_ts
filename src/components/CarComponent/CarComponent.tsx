import React, {FC} from 'react';
import {ICarWithAuth} from "../../models/cars models/ICarWithAuth";

interface ICarProps {
    car: ICarWithAuth
}

const CarComponent: FC<ICarProps> = ({car}) => {

    /*******************************************************************************************/

    return (
        <div>
            <div>
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