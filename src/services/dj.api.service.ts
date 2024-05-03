import axios, {AxiosResponse} from "axios";

import {IUsersResponseModel} from "../models/ResponseModel/IUsersResponseModel";

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

    }
}

export {requests}
