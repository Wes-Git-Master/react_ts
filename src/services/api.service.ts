import axios from "axios";
import {AuthDataModel} from "../models/auth models/AuthDataModel";
import {ITokenObtainPair} from "../models/auth models/ITokenObtainPair";
import {ICarPaginatedModel} from "../models/cars models/ICarPaginatedModel";
import {retrieveLocalStorageData} from "../helpers/helpers";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v2',
    headers: {}
});

/***********************************   interceptors   ***************************************/

axiosInstance.interceptors.request.use((request) => {

    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh'))
        request.headers.set('Authorization', 'Bearer ' + retrieveLocalStorageData<ITokenObtainPair>('tokenPair').access)

    return request
})
/***********************************   authService   ***************************************/

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
        return !!(response?.data?.access && response.data?.refresh)

    },
    refresh: async () => {
        const refreshToken = retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    }
}

/***********************************   carService   ****************************************/

const carService = {
    getCars: async (page: string = '1'): Promise<ICarPaginatedModel | null> => {
        const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {params: {page: page}});
        return response.data;
    }
}


export {authService, carService}