import axios, {AxiosResponse} from "axios";
import {IUserResponseModel} from "../models/ResponseModels/IUserResponseModel";
import {ICartResponseModel} from "../models/ResponseModels/ICartResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {"Content-Type": "application/json"}
});

let requests = {
     users: {
         getAllUsers: ():Promise<AxiosResponse<IUserResponseModel>> => {
                    return axiosInstance.get('/users')
         }
     },
     carts: {
         getCartOfSingleUser: (id:number):Promise<AxiosResponse<ICartResponseModel>> => {
             return axiosInstance.get('/carts/user/' + id)
         }
     }
}

export {requests}


