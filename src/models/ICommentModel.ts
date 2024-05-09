export interface ICommentModel {
    id: number,
    body: string,
    postId: number,
    user: {
        id: number,
        username: string
    }
}
