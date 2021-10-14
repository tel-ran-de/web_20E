import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            field: ''
        }
    }

    changeFieldHandler = (event) => {
        this.setState({field: event.target.value})
    }

    submitFormHandler = (event) => {
        event.preventDefault()
        this.props.addTodo({
            id: Date.now(),
            title: this.state.field,
            completed: false
        })
        this.setState({field: ''})
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitFormHandler}>
                    <div className="mb-3">
                        <label htmlFor="field" className="form-label">ToDo Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="field"
                            onChange={this.changeFieldHandler}
                            value={this.state.field}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
                <hr/>
                { this.props.todos.map((todo) =>
                    <div
                        className={ todo.completed ? 'text-danger text-decoration-line-through mb-2' : 'text-success mb-2'}
                        onClick={() => {this.props.completeTodoById(todo.id)}}
                        key={todo.id}
                    >{todo.title} <button onClick={()=>{this.props.removeTodo(todo.id)}} className="btn btn-sm btn-danger">Del</button></div>) }
            </div>
        );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);