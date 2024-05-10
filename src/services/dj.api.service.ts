import axios, {AxiosResponse} from "axios";

import {IPostsResponseModel} from "../models/ResponseModel/IPostsResponseModel";

import {ICommentsResponseModel} from "../models/ResponseModel/ICommentsResponseModel";


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
        getAllCommentsOfSinglePost : (id:number):Promise<AxiosResponse<ICommentsResponseModel>> => {
            return axiosInstance.get('/comments/post/' + id )
        }
    }

}

export {requests}


