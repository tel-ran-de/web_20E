import React from 'react';
import TodoItem from "./TodoItem";


const TodoList = props => {

    const renderList = () => {
        return props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
    }


    return (
        <ul className="list-group">
            {renderList()}
        </ul>
    )
};

export default TodoList;