import React, {FC} from 'react';
import {IPaginationPageModel} from "../../models/pagination/IPaginationPageModel";
import styles from "../../styles/car styles/car.module.css"
import {useSearchParams} from "react-router-dom";
interface IProps {
    next: null | IPaginationPageModel,
    prev: null | IPaginationPageModel
}

const PaginationComponent: FC<IProps> = ({next, prev}) => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const changePage = (action: string) => {
        switch (action) {
            case 'next':
                setQuery({...next})
                break;
            case 'prev':
                setQuery({...prev})
                break;
        }
    };

    return (
        <div className={styles.buttons}>

            <button
                disabled={!prev}
                onClick={() => {
                changePage('prev')
            }}>prev
            </button>

            <button
                disabled={!next}
                onClick={() => {
                changePage('next')
            }}>next
            </button>

        </div>
    );
};

export {PaginationComponent};