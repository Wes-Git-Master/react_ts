import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {UserPostsPage} from "../pages/UserPostsPage";
import {PostsPage} from "../pages/PostsPage";
import {UsersPage} from "../pages/UsersPage";

const router = [{
    path: '/', element: <App/>, children: [
        {path: 'users', element: <UsersPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'userPosts', element: <UserPostsPage/>}
    ]
}]
export const browserRouter = createBrowserRouter(router)