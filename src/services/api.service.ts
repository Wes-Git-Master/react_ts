import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {"Content-Type": "application/json"}
});

/**************************************************************************************************/

export const userService = {
    getAll: async (): Promise<IUser[]> => {
        const response = await axiosInstance.get<IUser[]>(urls.users.base)
        return response.data
    },
    getById: async (id: string): Promise<IUser> => {
        const response = await axiosInstance.get<IUser>(urls.users.byId(+id));
        return response.data
    }
}

/**************************************************************************************************/

export const postService = {
    getAll: async () => {
        let response = await axiosInstance.get<IPost[]>(urls.posts.base)
        return response.data
    }
}

/**************************************************************************************************/

export const commentService = {
    getByPostId: async (id: string): Promise<IComment[]> => {
        const response = await axiosInstance.get<IComment[]>(urls.comments.byPostId(+id));
        return response.data
    }
}



