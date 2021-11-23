import React from 'react'
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/actionsCreator";

export default props => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.isAuth)
    const navigate = useNavigate()

    const logOutClickHandler = (e) => {
        e.preventDefault()
        dispatch(logout())
        navigate('/')
    }

    const renderInAuth = () => {
        return (<>
                <NavLink className=" nav-link" to="/users">Users</NavLink>
                <button className="btn btn-link nav-link" onClick={logOutClickHandler} >LogOut</button>
        </>)
    }

    const renderOutAuth = () => {
        return (<>
            <NavLink className="nav-link" to="/signup">Registration</NavLink>
            <NavLink className="nav-link" to="/login">LogIn</NavLink>
        </>)
    }

    return (
        <nav className="nav">
            <NavLink className=" nav-link" to="/">Home</NavLink>

            { isAuth
                ? renderInAuth()
                : renderOutAuth() }

        </nav>
    )
}