import React from 'react';
import users from './users';

function User(props) {
    const user = users.find(item => item.id === props.id);

    return (
        <div>
            {user.username}
        </div>
    )
}

export default User