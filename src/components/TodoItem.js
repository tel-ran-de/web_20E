import React from 'react';

const TodoItem = props => {
    return (
        <div
            className={`list-group-item list-group-item-${props.color}`}
        >{props.children}</div>
    )
}

export default TodoItem;