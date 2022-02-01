import React, {useEffect} from 'react';

import {useSelector, useDispatch} from "react-redux";
import {getAll} from "../../store/commentReducer";
import Comment from "../comment/Comment";

function Comments() {
    const state = useSelector(state => state.comments.comments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        state.map(comment => {
            return (
                <div key={comment.id} className={'col-12'}>
                    <Comment comment={comment}/>
                </div>
            )
        })
    );
}

export default Comments;