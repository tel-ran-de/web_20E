import React, {useState} from 'react'
import {connect} from "react-redux";

const AppConnect = ({todos, addTodo, completeTodoById, removeTodo}) => {

    const [field, setField] = useState("");

    const renderTodos = () => {
        return todos.map(todo =>
            <div key={todo.id}>
                {todo.title} <span onClick={() => {
                removeTodo(todo.id)
            }}>Delete</span>
                <span onClick={() => completeTodoById(todo.id)}>Complete?</span>
            </div>
        )
    }

    const onChangeField = event => {
        setField(event.target.value)
    }

    const onAddTodo = () => {
        addTodo({id: Date.now(), title: field, completed: false})
        setField("")
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

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch({type: 'ADD_TODO', payload: todo}),
        completeTodoById: (todoId) => dispatch({type: 'COMPLETE_TODO', payload: todoId}),
        removeTodo: (id) => dispatch({type: 'REMOVE_TODO', payload: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppConnect)