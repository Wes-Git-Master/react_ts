import React, {FC, useState} from 'react';

import {useForm} from "react-hook-form";
import {IFormProps} from "../models/IFormModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {IPostModel} from "../models/IPostModel";
import {requests} from "../services/api.service";

const FormComponent: FC = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: "all", resolver: joiResolver(postValidator)
    });

    const [post, setPost] = useState<IPostModel | null>(null);


    const save = (post: IFormProps) => {

        requests.posts.savePost(post).then(value => {
                setPost(value.data)
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
                {errors.body && <span>{errors.body.message}</span> }
                <br/>
                <button>send</button>
            </form>

            {post && <h2> saved post {post.userId} {post.title}</h2>}

        </div>
    );
};

export {FormComponent};