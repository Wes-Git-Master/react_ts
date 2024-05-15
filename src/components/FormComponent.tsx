import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {IPostModel} from "../models/IPostModel";
import {postService} from "../services/api.service";

export interface IFormProps {
    title: string,
    body: string,
    userId: number;
}

const FormComponent: FC = () => {
    let {register, handleSubmit, formState: {errors, isValid}}
        = useForm<IFormProps>({mode: "all", resolver: joiResolver(postValidator)});

    const [post, setPost] = useState<IPostModel | null>(null);


    const save = (post: IFormProps) => {
        postService
            .savePost(post)
            .then(value => setPost(value.data));
    };

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text"{...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>
                <input type="text"  {...register('body')}/>
                <br/>
                <input type="number"  {...register('userId')}/>
                <br/>
                <button>save</button>
            </form>

            {post && <h2> saved post {post.id} {post.title}</h2>}
        </div>
    );
};

export default FormComponent;
