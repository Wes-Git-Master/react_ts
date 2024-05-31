import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import {ICarWithAuth} from "../models/cars models/ICarWithAuth";
import {CarsComponent} from "../components/CarsComponent/CarsComponent";

const CarsPage = () => {

    /*******************************************************************************************/

    const [cars,setCars] = useState<ICarWithAuth[]>([]);

    useEffect(() => {

        carService.getCars().then(value =>{
            if (value) {
                setCars(value.items)
            }
        })

    }, []);

    /*******************************************************************************************/

    return (
        <div>
                <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsPage;