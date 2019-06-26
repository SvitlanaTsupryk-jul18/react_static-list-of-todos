import React from 'react';
import User from './User'

const TodoItem = ({ userId, title, completed }) => {
    return (
        <li className={completed ? "done" : "not"}>
            <div className="left">{title}</div>
            <User id={userId} />
        </li>
    )
}

export default TodoItem