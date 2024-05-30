import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../../models/AuthDataModel";
import {authService} from "../../services/api.service";

const FormComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<AuthDataModel>();

    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async (formData: AuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth)
    };

    return (
        <div>
            <h3> Login form</h3>
            {!isAuthState ? <div>not ok</div> : <div>ok</div>}
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>login</button>
            </form>

        </div>
    );
};

export {FormComponent};