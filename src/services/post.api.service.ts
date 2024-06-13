import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {"Content-Type": "application/json"}
});

export const postService = {
    getAll: async () => {
        let response = await axiosInstance.get<IPost[]>(urls.posts.base)
        return response.data
    }
}