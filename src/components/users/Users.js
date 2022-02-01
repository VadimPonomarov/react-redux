import React, {useEffect} from 'react';

import {useSelector, useDispatch} from "react-redux";
import {getAll} from "../../store/reducers/userReducer";
import User from "../user/User";
import {Link} from "react-router-dom";

function Users() {
    const state = useSelector(state => state.users.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        state.map(user => {
            return (
                <div key={user.id} className={'col-5 card m-2'}>
                    <Link className={'text-center mt-2'} to={`/posts/${user.id}`}>Posts</Link>
                    <User user={user}/>
                </div>
            )
        })
    );
}

export default Users;