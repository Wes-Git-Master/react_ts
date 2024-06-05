import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
});

const userService = {
    getUsers: async (): Promise<AxiosResponse<IUserModel[]>> => {
        return await axiosInstance.get<IUserModel[]>('/users')
    }
}


export {userService}