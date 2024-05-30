import React, {FC} from 'react';
import {ICarWithAuth} from "./models/ICarWithAuth";

interface IProps{
    cars:ICarWithAuth[]
}

const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map(car => (
                    <div key={car.id}>
                        <ul>
                            <li>id: {car.id}</li>
                            <li>brand: {car.brand}</li>
                            <li>year: {car.year}</li>
                            <li>price: {car.price}</li>
                        </ul>


                    </div>
                ))
            }
            
        </div>
    );
};

export {CarsComponent};