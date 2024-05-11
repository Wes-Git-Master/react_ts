import React, {FC} from 'react';
import {useFetch} from "../../custom hooks/useFetch";

type IProps = {
    id: number,
    name?:string
}
const UserComponent:FC<IProps> = ({id}) => {

    console.log('UserComponent')

    const users = useFetch('https://jsonplaceholder.typicode.com','/users')

    return (
        <div>

            {
                users.map(users => (<div key={users.id}> {users && users.name}</div>))

            }

        </div>
    );
};

export {UserComponent};

