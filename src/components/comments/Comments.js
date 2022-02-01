import React, {useEffect} from 'react';

import {useSelector, useDispatch} from "react-redux";
import {getAll} from "../../store/reducers/commentReducer";
import Comment from "../comment/Comment";

function Comments({postId}) {
    const state = useSelector(state => state.comments.comments)
    const stateFiltered = postId ? state.filter(comment => comment.postId.toString() === postId) : state
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        stateFiltered .map(comment => {
            return (
                <div key={comment.id} className={'col-12'}>
                    <Comment comment={comment}/>
                </div>
            )
        })
    );
}

export default Comments;