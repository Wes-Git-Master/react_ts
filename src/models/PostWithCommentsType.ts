import {IPostModel} from "./IPostModel";
import {ICommentModel} from "./ICommentModel";

export type PostWithCommentsType = IPostModel & { comments: ICommentModel[] }