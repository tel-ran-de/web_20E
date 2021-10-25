import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../store/actionGenerator";

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const users = useSelector( state => state.users );
    const error = useSelector( state => state.error );

    return (
        <div className="container">
            { error ? <div className="alert alert-danger">{error}</div> : ''}
            { users.length ? users.map( (user) => <div key={user.id}>{user.name}</div>) : <div>No Users</div>}
        </div>
    )
}

export default App