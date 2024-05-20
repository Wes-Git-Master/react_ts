import React, {useEffect, useState} from 'react';
import {CommentsComponent} from "../../components/CommentsComponent/CommentsComponent";
import {ICommentModel} from "../../model/ICommentModel";
import {requests} from "../../services/api.service";
import {useParams} from "react-router-dom";


const CommentsPage = () => {

    const {id} = useParams();

    // const location = useLocation();
    // console.log(location)

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        if (id) {
            requests.commentApiService.getCommentsOfSinglePost(id.toString())
                .then(value => setComments(value.data))
        }


    }, [id]);

    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export {CommentsPage};