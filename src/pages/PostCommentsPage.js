import React from 'react';

import {useParams} from "react-router-dom";
import Comments from "../components/comments/Comments";

function PostCommentsPage() {
    const postId = useParams().postId

    return (
        <div className={'container d-flex flex-wrap justify-content-center'}>
            <Comments postId={postId}/>
        </div>
    );
}

export default PostCommentsPage;