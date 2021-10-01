import React from 'react';
import TodoList from "./TodoList";

const Todos = props => {

    const renderTitle = () => {
        if (!props.activeUser.name) {
            return (<h2>Choose user in left side</h2>)
        }
        return (<h2>Todo List for {props.activeUser.name}</h2>)
    }

    const renderTodoList = () => {
        if (!props.todos.length) {
            return null;
        }
        return <TodoList
            todos={props.todos}
        />
    }


    return (
        <>
            {renderTitle()}
            {renderTodoList()}
        </>

    )
}

export default Todos;