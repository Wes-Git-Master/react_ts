import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {createContext, useContext} from "react";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        setFavoriteUser: (obj: IUserModel) => void
    },
    postStore: {
        allPosts: IPostModel[]
    }
}
const defaultValue: StoreType = {
    userStore: {
        allUsers: [],
        setFavoriteUser: () => {}
    },
    postStore: {
        allPosts: []
    }
}
export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = (): StoreType => {
    return useContext(Context)
};