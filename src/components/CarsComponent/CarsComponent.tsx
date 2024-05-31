import React, {FC} from 'react';
import {CarComponent} from "../CarComponent/CarComponent";
import {ICarWithAuth} from "../../models/cars models/ICarWithAuth";

interface ICarsProps {
    cars: ICarWithAuth[]
}

const CarsComponent:FC<ICarsProps> = ({cars}) => {

    /*******************************************************************************************/

    return (
        <div>

            {
                cars.map(car => <CarComponent car={car} key={car.id}/>)
            }

        </div>
    );
};

export {CarsComponent};