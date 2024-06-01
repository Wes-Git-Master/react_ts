import React, {FC, useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import {CarsComponent} from "../components/CarsComponent/CarsComponent";
import {ICarPaginatedModel} from "../models/cars models/ICarPaginatedModel";
import {useSearchParams} from "react-router-dom";
import {PaginationComponent} from "../components/PaginationComponent/PaginationComponent";

const CarsPage: FC = () => {

    /*******************************************************************************************/

    const [query, setQuery] = useSearchParams({page: '1'});

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

    const changePage = (action: string) => {
        switch (action) {
            case 'next':
                setQuery({...carPaginatedObject.next})
                break;
            case 'prev':
                setQuery({...carPaginatedObject.prev})
                break;
        }
    };

    return (
        <div>
            <CarsComponent cars={carPaginatedObject.items}/>
            <PaginationComponent next={carPaginatedObject.next} prev={carPaginatedObject.prev} changePage={changePage}/>
        </div>
    );
};

export default CarsPage;