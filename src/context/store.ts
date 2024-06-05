import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {create} from "zustand";

type StoreType = {
    userSlice: {
        allUsers: IUserModel[],
        loudUsers: (users: IUserModel[]) => void,
        favoriteUser: IUserModel | null,
        setFavoriteUser: (obj: IUserModel) => void
    },
    postSlice: {
        allPosts: IPostModel[],
        loudPosts: (posts: IPostModel[]) => void
    }
}

export const useStore = create<StoreType>()((set) => {
    return {

        /*****************************************************************************************************/

        userSlice: {
            allUsers: [],
            loudUsers: (users: IUserModel[]) => {
                return set(state => {
                    return {...state, userSlice: {...state.userSlice, allUsers: users}}
                })
            },

            favoriteUser: null,
            setFavoriteUser: (obj: IUserModel) => {
                return set(state => {
                    return {
                        ...state,
                        userSlice: {
                            ...state.userSlice,
                            favoriteUser: obj
                        }
                    }
                })
            },
        },

        /*****************************************************************************************************/

        postSlice: {
            allPosts: [],
            loudPosts: (posts: IPostModel[]) => {

                return set(state => {
                    return {...state, postSlice: {...state.postSlice, allPosts: posts}}

                })

            }
        }
    }
});

