import React, {FC} from 'react';

import {ICommentModel} from "../models/ICommentModel";

interface IProps {
    comment: ICommentModel
}

type IPropsType = IProps & { children?:React.ReactNode }

const CommentComponent:FC<IPropsType> = ({comment}) => {
    return (
        <div>
            <li>{comment.body}</li>
        </div>
    );
};

export {CommentComponent};