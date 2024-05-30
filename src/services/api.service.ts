import axios, {AxiosError} from "axios";
import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {retrieveLocalStorageData} from "../helpers/helpers";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v2',
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

        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars');
            return response.data;

        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) {
                const refreshToken = retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                await carService.getCars();


            }

        }

    }
}

export {authService, carService}