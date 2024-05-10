import axios, {AxiosResponse} from 'axios';
import {User} from "../models/User";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const getUsers = ():Promise<AxiosResponse<User[]>> => {
    return axiosInstance.get('/users');

}
export {getUsers}
