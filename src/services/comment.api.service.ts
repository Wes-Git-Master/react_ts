import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {"Content-Type": "application/json"}
});

export const commentService = {
    getByPostId: async (id: string): Promise<IComment[]> => {
        const response = await axiosInstance.get<IComment[]>(urls.comments.byPostId(+id));
        return response.data
    }
}