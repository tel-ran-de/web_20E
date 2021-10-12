import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";

const App = () => {

    const [field, setField] = useState("");
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const renderTodos = () => {
        return todos.map(todo =>
            <div key={todo.id}>
                {todo.title} <span onClick={() => {
                onRemoveTodo(todo.id)
            }}>Delete</span>
            </div>
        )
    }

    const onChangeField = event => {
        setField(event.target.value)
    }

    const onAddTodo = () => {
        dispatch({
            type: 'ADD_TODO',
            payload: {id: Date.now(), title: field, completed: false}
        })
        setField("")
    }

    const onRemoveTodo = todoId => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: todoId
        })
    }

    return (
        <>
            <div>
                <input type="text" value={field} onChange={onChangeField}/>
                <button onClick={onAddTodo}>Add</button>
            </div>
            <hr/>
            {renderTodos()}
        </>
    )
}

export default App