import React, {FC} from 'react';

interface IProps {
    changePage: (action: string) => void
}

const PaginationComponent: FC<IProps> = ({changePage}) => {
    return (
        <div>

            <button onClick={() => {
                changePage('prev')
            }}>prev
            </button>

            <button onClick={() => {
                changePage('next')
            }}>next
            </button>

        </div>
    );
};

export {PaginationComponent};