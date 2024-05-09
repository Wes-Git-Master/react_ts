import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
});

let requests = {
    posts: {
        getAllPosts : ():Promise<AxiosResponse<IPostModel[]>> => {
            return axiosInstance.get('/posts');
        }
    },
    comments: {

    }

}

export {requests}