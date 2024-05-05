import React, {FC} from 'react';

import {IPostProps} from "../../models/IPostModel";

import styles from "../../styles/posts.style.module.css"

interface IProps {
    posts: IPostProps[]
}

const PostsComponent: FC<IProps> = ({posts}) => {


    return (
        <div className={styles.postsBox}>
            {posts.map((posts) => <div key={posts.id}>
                <hr/>
                <h4>userId - {posts.userId}</h4>
                <h2>{posts.title}</h2>
                <p>body - {posts.body}</p>
                <p>tags - {posts.tags}</p>
                <p>reactions - {posts.reactions}</p>
                <hr/>

            </div>)}
        </div>
    );
};

export {PostsComponent};