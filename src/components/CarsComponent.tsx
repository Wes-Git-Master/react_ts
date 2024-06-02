import React, {FC} from 'react';
import {ICarWithAuthMode} from "../models/ICarWithAuthMode";

interface IProps {
    cars: ICarWithAuthMode[]
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map(car => <div key={car.id}>
                    {car.id} {car.brand}
                </div>)
            }
        </div>
    );
};

export default CarsComponent;
