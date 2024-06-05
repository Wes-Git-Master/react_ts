import axios from "axios";
import {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
});

const postService = {
    getPosts: async (): Promise<AxiosResponse<IPostModel[]>> => {
        return await axiosInstance.get<IPostModel[]>('/posts')
    }
}

export {postService}