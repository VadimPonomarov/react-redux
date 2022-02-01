import React from 'react';

function Comment({comment}) {
    return (
       <div className={'card text-center m-1 p-2'}>
           <div>Post: {comment.postId} - comment: {comment.id}</div>
           <h5>{comment.name}</h5>
           <div>{comment.email}</div>
           <div>{comment.body}</div>
       </div>
    );
}

export default Comment;