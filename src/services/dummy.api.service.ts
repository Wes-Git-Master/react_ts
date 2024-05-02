import axios, {AxiosResponse} from 'axios';
import {CartsResponseModel} from "../models/responseModels/CartsResponseModel";
import {ProductResponse} from "../models/responseModels/ProductResponse";
import {FullProductModel} from "../models/FullProductModel";


let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});

const getAllCarts = (): Promise<AxiosResponse<CartsResponseModel>> => {
    return axiosInstance.get('/carts')
}

const getProductById = (id: number): Promise<AxiosResponse<FullProductModel>> => {

    return axiosInstance.get('/products/' + id);
}
export {
    getAllCarts,
    getProductById
}
