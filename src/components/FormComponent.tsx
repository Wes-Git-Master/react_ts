import React, {FC} from 'react';
import {useForm} from "react-hook-form";

interface IFormProps {
    username: string,
    age: number
    password: string,
}

const FormComponent: FC = () => {
    let formObj = useForm<IFormProps>();
    let {register, handleSubmit} = formObj;


    const save = (formValues: IFormProps) => {
        console.log(formValues);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text"  {...register('username')}/>
                <input type="number"  {...register('age')}/>
                <input type="text"  {...register('password')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;
