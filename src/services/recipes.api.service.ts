import axios, {AxiosResponse} from 'axios';
import {IRecipeProps} from "../models/Recipe";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
});


const getAllRecipes = (): Promise<AxiosResponse<IRecipeProps[]>> => {
    return axiosInstance.get('/recipes');
}


export {getAllRecipes}



