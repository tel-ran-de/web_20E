import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../store/actionsCreator";

export default props => {

    const isAuth = useSelector(state => state.isAuth)
    const dispatch = useDispatch()
    const users = useSelector( state => state.users )

    useEffect(() => {
        if ( isAuth ) {
            dispatch(getAllUsers())
        }
    }, [isAuth]);


    return !users.length
        ? (<h2>No Users</h2>)
        : (<div className="list-group">
            {users.map(u => <div key={u.id} className="list-group-item">{u.username}</div>)}
        </div>)
}