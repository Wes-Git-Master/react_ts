import React, {FC} from 'react';
import {IPostModel} from "../../model/IPostModel";
import styles from '../../styles/post.style.module.css'
import {useNavigate} from "react-router-dom";

interface IProps {
    post: IPostModel
}

type IPropsType = IProps & { children?: React.ReactNode }
const PostComponent: FC<IPropsType> = ({post}) => {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.singlePostBlock}>
                <p className={styles.postId}>postId : {post.id}</p>
                <p className={styles.title}>Title : {post.title}</p>
                <p className={styles.body}>{post.body}</p>

                <button onClick={() => {
                    navigate(post.id.toString())
                }} className={styles.button}> show comments
                </button>
            </div>

        </>
    );
};

export {PostComponent}