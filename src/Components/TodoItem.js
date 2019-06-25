import React from 'react';
import User from './User'

function TodoItem(props) {
    const { userId, title, completed } = props;
    return (
        <div className="todo">
            <li className={completed ? "done" : "not"}>
                <div className="left">{title}</div>
                <User id={userId} />
            </li>
        </div>
    )
}

export default TodoItem