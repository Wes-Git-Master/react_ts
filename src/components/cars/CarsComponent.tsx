import React, {FC} from 'react';
import {CarComponent} from "../car/CarComponent";
import {ICarsProps} from "../../models/ICarsProps";

const CarsComponent:FC<ICarsProps> = ({cars}) => {
    return (
        <div>
            <CarComponent cars={cars}/>
            
        </div>
    );
};

export {CarsComponent};