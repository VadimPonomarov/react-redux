import React, {useEffect} from 'react';

import {useSelector, useDispatch} from "react-redux";
import {getAll} from "../../store/reducers/postReducer";
import Post from "../post/Post";


function Posts({userId}) {
    const state = useSelector(state => state.posts.posts)
    const stateFiltered = userId ? state.filter(post => post.userId.toString() === userId) : state
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (

        stateFiltered.map(post => {
            return (
                <div key={post.id} className={'col-12'}>
                    <Post post={post}/>
                </div>
            )
        })
    );
}

export default Posts;