import React, {useEffect} from 'react';
import {carService} from "../services/api.service";
import CarsComponent from "../components/CarsComponent";

const CarsPage = () => {

    useEffect(() => {
        carService.getCars().then(value => console.log(value));
    }, []);

    return (
        <div>
            <CarsComponent/>
        </div>
    );
};

export default CarsPage;
