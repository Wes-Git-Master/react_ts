import axios, {AxiosResponse} from "axios";
import {IUserProps} from "../models/IUserModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: { 'Content-Type': 'application/json' }
});

let requests = {
    users: {
        getAllUsers : ():Promise<AxiosResponse<IUserProps[]>> => {
            return axiosInstance.get('/users')}
    },
    posts: {

    }
}

export {requests}
