import React, {useEffect} from 'react';

import {useSelector, useDispatch} from "react-redux";
import {getAll} from "../../store/reducers/userReducer";
import User from "../user/User";

function Users() {
    const state = useSelector(state => state.users.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        state.map(user => {
            return (
                <div key={user.id} className={'col-6'}>
                    <User user={user}/>
                </div>
            )
        })
    );
}

export default Users;