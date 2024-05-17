import React, {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

const ContactComponent: FC<any> = ({contact}) => {

    const navigate = useNavigate();
    const onClockNavigateHandler = () => {
        navigate(contact.id.toString(), {state: {contact}});
    };
    return (
        <div>
            {contact.email} <NavLink to={contact.id.toString()} state={{contact}}> details </NavLink>

            or

            <button onClick={onClockNavigateHandler}>details by button</button>
        </div>
    );
};

export {ContactComponent};