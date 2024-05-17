import React from 'react';
import {useParams} from "react-router-dom";

const SingleContactPage = () => {

    const {id} = useParams();


    return (
        <div>
            SingleContactPage {id}

        </div>
    );
};

export {SingleContactPage};