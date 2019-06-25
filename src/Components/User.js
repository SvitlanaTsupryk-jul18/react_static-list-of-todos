import React from 'react';
import users from './users';

function User(props) {
    let user = users.find(item => item.id === props.id);

    return (
        <div>
            {user.username}
        </div>
    )
}

export default User