import axios, {AxiosResponse} from "axios";

import {IPostsResponseModel} from "../models/ResponseModel/IPostsResponseModel";


const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
});

let requests = {
    posts: {
        getAllPosts : ():Promise<AxiosResponse<IPostsResponseModel>> => {
            return axiosInstance.get('/posts');
        }
    },
    comments: {

    }

}

export {requests}