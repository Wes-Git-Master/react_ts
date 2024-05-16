import axios, {AxiosResponse} from "axios";

import {IUserModel} from "../model/IUserModel";
import {IPostModel} from "../model/IPostModel";
import {ICommentModel} from "../model/ICommentModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
});

let requests = {
    userApiService: {
        getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
            return axiosInstance.get('/users');
        },
        // getUserByUserId: async (userId: number): Promise<AxiosResponse<IUserModel>> => {
        //     return await axiosInstance.get(`/users/${userId}`)
        // }
    },
    postApiService: {
        getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
            return axiosInstance.get('posts')
        }
    },
    commentApiService: {
        getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => {
            return axiosInstance.get('comments')
        }
    }
}

export {requests}