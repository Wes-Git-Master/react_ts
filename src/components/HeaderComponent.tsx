import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {

    return (
        <div>
            <ul>
                <li><Link to={'users'}>users page</Link></li>
                <li><Link to={'posts'}>posts page</Link></li>
                <li><Link to={'comments'}> comments page</Link></li>
                <li><Link to={'userPosts'}>userPosts page</Link></li>
                <li><Link to={'postComments'}>postComments page</Link></li>
            </ul>

        </div>
    );
};

export {HeaderComponent};