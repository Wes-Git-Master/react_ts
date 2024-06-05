import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {UserPostsPage} from "../pages/UserPostsPage";
import {PostsPage} from "../pages/PostsPage";
import {UsersPage} from "../pages/UsersPage";
import {CommentsPage} from "../pages/CommentsPage";
import {PostCommentsPage} from "../pages/PostCommentsPage";

const router = [{
    path: '/', element: <App/>, children: [
        {path: 'users', element: <UsersPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'comments', element: <CommentsPage/>},
        {path: 'userPosts', element: <UserPostsPage/>},
        {path: 'postComments', element: <PostCommentsPage/>}
    ]
}]
export const browserRouter = createBrowserRouter(router)