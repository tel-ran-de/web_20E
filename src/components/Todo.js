import React, {useState} from 'react';

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
            return (<div className="list-group-item list-group-item-danger">Not tasks</div>);
        }
        return todos.map(todo => (
            <div
                key={todo.id}
                className={`list-group-item ${todo.isCompleted ? 'list-group-item-dark' : 'list-group-item-success'}`}
            ><span
                onClick={() => {
                    completedHandler(todo.id);
                }}
            >{todo.title}</span> <span
            onClick={()=> {deleteHandler(todo.id)}}
            >X</span></div>
        ));
    }

    const completedHandler = (todoId) => {
        const idx = todos.findIndex(t => t.id === todoId);
        if ( idx === -1 ) return;
        const _todos = [...todos];
        _todos[idx].isCompleted = !_todos[idx].isCompleted;
        setTodos(_todos);
    }

    const deleteHandler = (todoId) => {
        const _todos = [...todos];
        setTodos( _todos.filter(t => t.id !== todoId ) );
    }

    return (<>
        <h2>Todo</h2>
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Enter new Task"
                value={field}
                onChange={changeHandler}
            />
            <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={clickHandler}
            >Add Task</button>
        </div>
        <div className="list-group">
            {renderTodoList()}
        </div>

    </>);
}

export default Todo;