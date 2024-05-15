import axios, {AxiosResponse} from "axios";
import {IFormProps} from "../models/IFormModel";
import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
});

let requests = {
    posts: {
        savePost: ({userId, title, body}: IFormProps): Promise<AxiosResponse<IPostModel>> => {
            return axiosInstance.post(
                '/posts',
                {userId, title, body},
                {headers: {"Content-Type": "application/json"}});
        }
    }
};

export {requests}

