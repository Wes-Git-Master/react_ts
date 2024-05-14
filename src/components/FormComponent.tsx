import React, {FC} from 'react';

import {useForm} from "react-hook-form";
import {IFormProps} from "../models/IFormModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";

const FormComponent: FC = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({mode: "all", resolver: joiResolver(postValidator)
    });


    const save = ({userId,tittle,body}: IFormProps) => {
            fetch('https://jsonplaceholder.typicode.com/posts',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId,
                    tittle: tittle,
                    body: body
                })
            })
                    .then(value => value.json())
                    .then(value => {
                        console.log(value)
                    });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="number" placeholder={'userId'} {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <br/>
                <input type="text" placeholder={'tittle'} {...register('tittle')}/>
                {errors.tittle && <span>{errors.tittle.message}</span>}
                <br/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>
                <button>send</button>
            </form>

        </div>
    );
};

export  {FormComponent};