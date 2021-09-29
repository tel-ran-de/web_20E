import React, {useState} from 'react';
import Field from "./Field";
import Button from "./Button";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

const Todo = () => {
    const [field, setField] = useState('');
    const changeHandler = event => {
        setField( event.target.value );
    }

    const [todos, setTodos] = useState([]);
    const clickHandler = event => {
        event.preventDefault();
        if (!field.trim()) return;
        const todo = {
            id: Date.now(),
            title: field.trim(),
            isCompleted: false,
        }
        setTodos((todos) => {
            return [...todos, todo];
        });
        setField('');
    }

    const renderTodoList = () => {
        if (!todos.length) {
            return (
                <TodoItem color="danger">
                    No tasks
                </TodoItem>);
        }
        return <TodoList
            todos={todos}
            onCompleteHandler={completedHandler}
            onDeleteHandler={deleteHandler}
        />
    }

    const completedHandler = (todoId) => {
        const _todos = [...todos];
        const idx = _todos.findIndex(t => t.id === todoId);
        if ( idx === -1 ) return;
        _todos[idx].isCompleted = !_todos[idx].isCompleted;
        setTodos(_todos);
    }

    const deleteHandler = (todoId) => {
        // const _todos = [...todos];
        setTodos( todos.filter(t => t.id !== todoId ) );
    }

    return (<>
        <h2>Todo</h2>
        <div className="input-group mb-3">
            <Field
                placeholder="Enter new Task"
                fieldValue={field}
                onChange={changeHandler}
            />
            <Button
                title="Add Task"
                onClick={clickHandler}
            />
        </div>
        <div className="list-group">
            {renderTodoList()}
        </div>

    </>);
}

export default Todo;