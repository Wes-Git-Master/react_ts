import axios, {AxiosError} from "axios";
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

/***********************************   carService   ****************************************/

const carService = {
    getCars: async (): Promise<ICarPaginatedModel | null> => {
        try {
           const response = await axiosInstance.get<ICarPaginatedModel>('/cars');
            return response.data;
        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError)
            if (axiosError?.response?.status === 401) {
                const refreshToken = retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken)
                return carService.getCars()
            }
        }

        return null
    }
}


export {authService, carService}