import React, {FC, useEffect} from 'react';
import {useFetch} from "../../custom hooks/useFetch";

type IProps = {
    id: number
}
const UserComponent:FC<IProps> = ({id}) => {

    console.log('UserComponent')

    useFetch('https://jsonplaceholder.typicode.com','/users/' + id)

    return (
        <div>


        </div>
    );
};

export {UserComponent};

