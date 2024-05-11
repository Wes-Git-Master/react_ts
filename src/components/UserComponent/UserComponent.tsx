import React, {FC} from 'react';
import {useFetch} from "../../custom hooks/useFetch";

type IProps = {
    id: number,
    name?:string
}
const UserComponent:FC<IProps> = ({id}) => {

    console.log('UserComponent')

    const users = useFetch('https://jsonplaceholder.typicode.com','/users/' + id,[])



    return (
        <div>

            {

                users.map((user) => <div>{user.name}</div>)

            }

        </div>
    );
};

export {UserComponent};

