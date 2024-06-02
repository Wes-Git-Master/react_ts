import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import {authService} from "../services/api.service";

const FormComponent = () => {
    const {
        handleSubmit,
        register
    } = useForm<AuthDataModel>({defaultValues: {username: 'userSZ1', password: 'P@$$word1'}});

    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async (formData: AuthDataModel): Promise<number> => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);

        return 100500;
    };
    return (
        <div>
            <h3>login form</h3>
            <div>
                {
                    isAuthState ? <span>ok</span> : <span>not ok</span>
                }

            </div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>auth me</button>
            </form>

        </div>
    );
};

export default FormComponent;
