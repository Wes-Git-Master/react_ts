import React, {useEffect} from 'react';
import {carService} from "../services/api.service";

const CarsPage = () => {

    useEffect(() => {

        carService.getCars().then(value => console.log(value))

    }, []);

    return (
        <div>

            Cars Page

        </div>
    );
};

export {CarsPage};