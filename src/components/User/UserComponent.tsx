import React, {FC} from 'react';

import {IUserProps} from "../../models/IUserModel";

import style from "."

interface IProps {
    user: IUserProps
}

type IPropsType = IProps & { children?: React.ReactNode }

const UserComponent: FC<IPropsType> = ({user}) => {
    return (
        <div className={s}>
            <hr/>
            <p>user - {user.id}</p>
            <ul>
                <li>firstName - {user.firstName}</li>
                <li>lastName - {user.lastName}</li>
                <li>maidenName - {user.maidenName}</li>
                <li>age - {user.age}</li>
                <li>gender - {user.gender}</li>
                <li>email - {user.email}</li>
                <li>phone - {user.phone}</li>
                <li>username - {user.username}</li>
                <li>password - {user.password}</li>
                <li>birthDate - {user.birthDate}</li>
                <li>bloodGroup - {user.bloodGroup}</li>
                <li>height - {user.height}</li>
                <li>weight - {user.weight}</li>
                <li>eyeColor - {user.eyeColor}</li>
                <li>hair : <br/>
                    color - {user.hair.color} , <br/>
                    type - {user.hair.type}</li>
                <li>domain - {user.domain}</li>
                <li>ip - {user.ip}</li>
                <li>macAddress - {user.macAddress}</li>
                <li>university - {user.university}</li>
                <li>bank : <br/>
                    cardExpire - {user.bank.cardExpire} <br/>
                    cardNumber - {user.bank.cardNumber} <br/>
                    cardType - {user.bank.cardType} <br/>
                    currency - {user.bank.currency} <br/>
                    iban - {user.bank.iban}</li>
                <li>ein - {user.ein}</li>
                <li>ssn - {user.ssn}</li>
                <li>userAgent - {user.userAgent}</li>
            </ul>
            <p>address:</p>
            <ul>
                <li>address - {user.address.address}</li>
                <li>city - {user.address.city}</li>
                <li>coordinates - lat: ({user.address.coordinates.lat}) , lng: ({user.address.coordinates.lng})</li>
                <li>postalCode - {user.address.postalCode}</li>
                <li>state - {user.address.state}</li>
            </ul>
            <p>company:</p>
            <ul>
                <li>address : <br/>
                    {user.company.address.address} <br/>
                    city - {user.company.address.city} <br/>
                    coordinates - lat : ({user.company.address.coordinates.lat}) , lng :
                    ({user.company.address.coordinates.lng}) <br/>
                    postalCode - {user.company.address.postalCode} <br/>
                    state - {user.company.address.state}</li>
                <li>department - {user.company.department}</li>
                <li>name - {user.company.name}</li>
                <li>title - {user.company.title}</li>
            </ul>
            <img src={user.image} alt="#"/>
            <button>posts</button>
        </div>
    );
};

export {UserComponent};