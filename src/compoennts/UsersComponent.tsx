import React, {FC} from 'react';

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


const UsersComponent: FC<any> = ({lift}) => {
    console.log();


    return (
        <div style={{border: '1px solid'}}>
            {
                users
                    .map((user, index) => {
                        return (<div key={index}>{user.name}
                            <button onClick={() => {
                                lift(user);
                            }}>xxx
                            </button>
                        </div>);
                    })

            }
        </div>
    );
};

export default UsersComponent;
