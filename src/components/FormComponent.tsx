import React, {FC} from 'react';
import {useForm} from "react-hook-form";

interface IFormProps {
    username: string,
    age: number
    password: string,
}

const FormComponent: FC = () => {
    let {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormProps>();


    const save = (formValues: IFormProps) => {
        console.log(formValues);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input
                    type="text"
                    {...register('username',
                        {
                            required: {
                                value: true,
                                message: 'this field is required'
                            },
                            maxLength: {
                                value: 10,
                                message: 'max lenght is 10'
                            }

                        }
                    )}
                />

                {errors.username && <span>{errors.username.message}</span>}
                <br/>

                <input type="number"  {...register('age')}/>
                <br/>
                <input type="text"  {...register('password')}/>
                <br/>
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;
