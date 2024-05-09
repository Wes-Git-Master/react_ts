import React, {FC} from 'react';
import {IUserPropsModel} from "../../models/UserModel/IUserModel";

interface IProps {
    user: IUserPropsModel
}

type IPropsType = IProps & {children?:React.ReactNode} & {lift?: (userId:number) => void}

const UserComponent: FC<IPropsType> = ({user,lift}) => {

    const onClickHandler = () => {
        if (lift){
            lift(user.id)
        }

    }

    return (
        <div>
            <hr/>
            <h1>{user.firstName} {user.lastName}</h1>
            <ul>
                <li><h3>userId - {user.id}</h3></li>
            </ul>
            <img src={user.image} alt=""/>
            <button onClick={onClickHandler}>cart</button>
        </div>
    );
};

export {UserComponent};