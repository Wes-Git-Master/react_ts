import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";

export type IUserWithPostsType = IUserModel & { posts: IPostModel[] }