import React from 'react';

function Post({post}) {
    return (
       <div className={'card text-center m-1 p-2'}>
           <h5>{post.id} - {post.title}</h5>
           <div>{post.body}</div>
       </div>
    );
}

export default Post;