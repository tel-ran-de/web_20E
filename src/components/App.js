import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers, getTodosByUserId} from "../store/actionGenerator";

const App = () => {

    const dispatch = useDispatch()
    const [activeUser, setActiveUser] = useState(null)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    useEffect(() => {
        if ( activeUser ) {
            dispatch(getTodosByUserId(activeUser.id))
        }
    }, [activeUser])

    const users = useSelector( state => state.users );
    const todos = useSelector( state => state.todos );
    const error = useSelector( state => state.error );

    return (
        <div className="container">
            { error ? <div className="alert alert-danger">{error}</div> : ''}
            <div className="row">
                <div className="col">
                    { users.length ? users.map( (user) => <div onClick={()=>{setActiveUser(user)}} key={user.id}>{user.name}</div>) : <div>No Users</div>}
                </div>
                <div className="col">
                    { todos.length ? todos.map( (todo) => <div key={todo.id}>{todo.title}</div>) : <div>No Todos</div>}
                </div>
            </div>


        </div>
    )
}

export default App