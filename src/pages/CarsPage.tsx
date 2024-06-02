import React, {FC, useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import {CarsComponent} from "../components/CarsComponent/CarsComponent";
import {ICarPaginatedModel} from "../models/cars models/ICarPaginatedModel";
import {useSearchParams} from "react-router-dom";
import {PaginationComponent} from "../components/PaginationComponent/PaginationComponent";

const CarsPage: FC = () => {

    /*******************************************************************************************/

    const [query] = useSearchParams();

    const [carPaginatedObject, setCarPaginatedObject] = useState<ICarPaginatedModel>({

        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0

    });

    useEffect(() => {

        carService.getCars(query.get('page') || '1').then(value => {
            if (value) {
                setCarPaginatedObject(value)
            }

            // console.log(value)
        })

    }, [query]);

    /*******************************************************************************************/

    return (
        <div>
            <PaginationComponent next={carPaginatedObject.next} prev={carPaginatedObject.prev}/>
            <CarsComponent cars={carPaginatedObject.items}/>
        </div>
    );
};

export default CarsPage;