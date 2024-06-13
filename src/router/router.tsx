import {createBrowserRouter, RouteObject} from "react-router-dom";
import {App} from "../App";
import {UsersPage} from "../pages/UsersPage";
import {PostsPage} from "../pages/PostsPage";
import {SingleUserPage} from "../pages/SingleUserPage";
import {CommentsOfPostPage} from "../pages/CommentsOfPostPage";

const routes: RouteObject[] = [
    {
        path: '', element: <App/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <SingleUserPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'posts/:id', element: <CommentsOfPostPage/>}

        ]
    }
];
const router = createBrowserRouter(routes);

export default router