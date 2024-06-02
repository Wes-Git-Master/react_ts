import React, {FC} from 'react';
import {IPaginatedPageModel} from "../models/IPaginatedPageModel";

interface IProps {
    changePage: (action: string) => void;
    next: IPaginatedPageModel | null;
    prev: IPaginatedPageModel | null;
}

const PaginationComponent: FC<IProps> = ({changePage, prev, next}) => {
    return (
        <div>
            <button onClick={() => {
                changePage('prev');
            }}
                    disabled={!prev}
            >prev
            </button>

            <button onClick={() => {
                changePage('next');
            }}
                    disabled={!next}
            >next
            </button>
        </div>
    );
};

export default PaginationComponent;
