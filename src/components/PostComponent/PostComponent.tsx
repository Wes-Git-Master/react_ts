import React, {FC} from 'react';
import {IPostModel} from "../../model/IPostModel";
import styles from '../../styles/post.style.module.css'

interface IProps {
    post: IPostModel
}

type IPropsType = IProps & { children?: React.ReactNode }
const PostComponent: FC<IPropsType> = ({post}) => {
    return (
        <>
            <div className={styles.singlePostBlock}>
                <p className={styles.postId}>postId : {post.id}</p>
                <p className={styles.title}>Title : {post.title}</p>
                <p>{post.body}</p>
            </div>

        </>
    );
};

export {PostComponent}