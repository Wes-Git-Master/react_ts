import axios, {AxiosResponse} from 'axios';
import {IPostModel} from "../models/IPostModel";
import {IFormProps} from "../components/FormComponent";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: {"Content-Type": "application/json"}
});

axiosInstance.interceptors.request.use(request => {
    console.log(request);
    request.headers.set({xxx: 'foobar'});
    return request;
});

const postService = {
    getAllPosts: () => {
        return axiosInstance.get('/posts')
    },
    savePost: (post: IFormProps): Promise<AxiosResponse<IPostModel>> => {
        return axiosInstance
            .post(
                `/posts`,
                post
            )
    }
}

const userService = {
    getAllPosts: () => {
        return axiosInstance.get('/posts')
    },
    savePost: ({title, userId, body}: IFormProps) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId
            })
        }).then(value => value.json())
    }
}


export {
    postService,
    userService
}


// return fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         title: title,
//         body: body,
//         userId: userId
//     })
// })
