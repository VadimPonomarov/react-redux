import React from 'react';
import {Link} from "react-router-dom";

function Post({post}) {
    return (
       <div className={'card text-center m-1 p-2'}>
           <h5>User:{post.userId} - Post: {post.id} - {post.title}</h5>
           <div>{post.body}</div>
           <Link to={`/posts/${post.id}/comments`}>Comments</Link>
       </div>
    );
}

export default Post;