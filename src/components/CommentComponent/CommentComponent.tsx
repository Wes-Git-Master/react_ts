import React, {FC} from 'react';
import {ICommentModel} from "../../model/ICommentModel";
import styles from '../../styles/comment.style.module.css'

interface IProps {
    comment: ICommentModel
}

type IPropsType = IProps & { children?: React.ReactNode }
const CommentComponent: FC<IPropsType> = ({comment}) => {
    return (
        <>
            <div className={styles.singleCommentBlock}>
                <p className={styles.commentId}>commentId : {comment.id}</p>
                <p className={styles.body}>body : {comment.body}</p>
            </div>
        </>
    );
};

export {CommentComponent};