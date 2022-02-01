import React from 'react';

function User({user}) {
    return (
       <div className={'text-center m-3 p-3'}>
           <h4>{user.id} - {user.name}</h4>
           <div>{user.username}</div>
           <div>{user.email}</div>
           <div>{user.website}</div>
           <h4>Address:</h4>
           <div>{user.address.street}</div>
           <div>{user.address.suite}</div>
           <div>{user.address.city}</div>
           <h4>Company:</h4>
           <div>{user.company.name}</div>
           <div>{user.company.catchPhrase}</div>
           <div>{user.company.phone}</div>
       </div>
    );
}

export default User;