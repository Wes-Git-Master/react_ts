import axios from "axios";
import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

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

axiosInstance.interceptors.request.use((request) => {

    request.headers.set('Authorization', 'Bearer' + localStorage.getItem('tokenPair'))


    return request
})

const carService = {
    getCars: async (): Promise<ICarPaginatedModel> => {

        const response = await axiosInstance.get<ICarPaginatedModel>('/cars');
        return response.data

    }
}

export {authService, carService}