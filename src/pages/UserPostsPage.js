import React from 'react';

import Posts from "../components/posts/Posts";
import {useParams} from "react-router-dom";

function UsersPage() {
    const userId = useParams().userId

    return (
        <div className={'container d-flex flex-wrap justify-content-center'}>
            <Posts userId={userId}/>
        </div>
    );
}

export default UsersPage;