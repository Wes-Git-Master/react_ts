import React, {FC} from 'react';
import {IUserWithPostsType} from "../models/IUserWithPostsType";

interface IProps{
    items: IUserWithPostsType[]
}
const UserPostsComponent:FC<IProps> = ({items}) => {
    return (
        <div>
            {
                items.map(item => <div key={item.id}>

                    {item.name}
                    <ul>
                        {item.posts.map((post)=> (<li key={post.id}>{post.title}</li>))}
                    </ul>

                    </div>)
            }
        </div>
    );
};

export {UserPostsComponent};