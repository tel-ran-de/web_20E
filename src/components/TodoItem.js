import React from 'react';

const TodoItem = props => {
    return (
        <li className={`list-group-item ${props.todo.completed ? 'list-group-item-danger' : ''}`}>
            {props.todo.title}
        </li>
    )
}

export default TodoItem;