import axios from "axios";
import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {retrieveLocalStorageData} from "../helpers/helpers";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v2',
    headers: {}
});

/*******************************************************************************************/

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        let response;

        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data))


        } catch (e) {
            console.log(e)
        }

        return !!(response?.data?.access && response.data?.refresh)
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));

    }
}

/*******************************************************************************************/

axiosInstance.interceptors.request.use((request) => {

    if (localStorage.getItem('tokenPair') && request.url !== '/auth/refresh')
        request.headers.set('Authorization', 'Bearer' + retrieveLocalStorageData<ITokenObtainPair>('tokenPair').access)

    return request
})

/*******************************************************************************************/

const carService = {

    getCars: async (): Promise<ICarPaginatedModel> => {
        const response = await axiosInstance.get<ICarPaginatedModel>('/cars');
        return response.data;
    }
}


export {authService, carService}