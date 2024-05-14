import React, {FC, useState} from 'react';

import {useForm} from "react-hook-form";
import {IFormProps} from "../models/IFormModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {IPostModel} from "../models/IPostModel";

const FormComponent: FC = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: "all", resolver: joiResolver(postValidator)
    });

    const [post, setPost] = useState<IPostModel | null>(null);


    const save = ({userId, title, body}: IFormProps) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                title: title,
                body: body
            })
        })
            .then(value => value.json())
            .then(value => {
                setPost(value)
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="number" placeholder={'userId'} {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}
                <br/>
                <input type="text" placeholder={'tittle'} {...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>
                <button>send</button>
            </form>

            {post && <h2> saved post {post.userId} {post.title}</h2>}

        </div>
    );
};

export {FormComponent};