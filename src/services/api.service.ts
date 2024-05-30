import axios from "axios";
import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {retrieveLocalStorageData} from "../helpers/helpers";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

axiosInstance.interceptors.request.use((request) => {
    if (localStorage.getItem('tokenPair') && request.url !== '/auth/refresh')
        request.headers.set('Authorization', 'Bearer' + retrieveLocalStorageData<ITokenObtainPair>('tokenPair').access)
    return request
})

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        let response;

        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data))


        } catch (e) {
            console.log(e)
        }

        return !!(response?.data?.access && response?.data?.refresh)

    }
}

const carService = {
    getCars: async (): Promise<ICarPaginatedModel> => {

        const response = await axiosInstance.get<ICarPaginatedModel>('/cars');
        return response.data

    }
}

export {authService, carService}