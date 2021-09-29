import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return props.todos.map(todo => (

        <TodoItem
            key={todo.id}
            color={todo.isCompleted ? 'dark' : 'success'}
        >
            <span
                onClick={() => {
                    props.onCompleteHandler(todo.id);
                }}
            >{todo.title}</span> <span
                onClick={() => {
                    props.onDeleteHandler(todo.id)
                }}
            >X</span>
        </TodoItem>
    ));
}

export default TodoList;