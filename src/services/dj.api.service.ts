import axios, {AxiosResponse} from "axios";

import {IUsersResponseModel} from "../models/ResponseModel/IUsersResponseModel";
import {IPostProps} from "../models/IPostModel";
import {IPostsResponseModel} from "../models/ResponseModel/IPostsResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: { 'Content-Type': 'application/json' }
});

let requests = {
    users: {
        getAllUsers : ():Promise<AxiosResponse<IUsersResponseModel>> => {
            return axiosInstance.get('/users')}
    },
    posts: {
        getAllPostsOfSingleUser : (id:number):Promise<AxiosResponse<IPostsResponseModel>> => {
           return  axiosInstance.get('/posts/user/' + id)
        }

    }
}

export {requests}
