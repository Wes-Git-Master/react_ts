import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../../models/auth models/AuthDataModel";
import {authService} from "../../services/api.service";

const FormComponent = () => {

    /*******************************************************************************************/

    const {
        handleSubmit,
        register
    } = useForm<AuthDataModel>({defaultValues: {username: 'Wes_1', password: 'P******d1'}});

    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async (formData: AuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth)
    };

    /*******************************************************************************************/

    return (
        <div>
            <h3> Login form</h3>
            {isAuthState ? <div> ok </div> : <div>not ok</div>}
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>login</button>
            </form>

        </div>
    );
};

export {FormComponent};