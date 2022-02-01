import React, {useEffect} from 'react';

import {useSelector, useDispatch} from "react-redux";
import {getAll} from "../../store/reducers/postReducer";
import Post from "../post/Post";

function Posts() {
    const state = useSelector(state => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        state.map(post => {
            return (
                <div key={post.id} className={'col-12'}>
                    <Post post={post}/>
                </div>
            )
        })
    );
}

export default Posts;