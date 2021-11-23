import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {registrate} from "../store/actionsCreator";
import {useNavigate} from "react-router-dom";

const initUser = {
    email: '',
    password: '',
    username: ''
}

export default () => {
    const navigate = useNavigate()

    const isAuth = useSelector(state => state.isAuth)
    const [user, setUser] = useState( initUser )
    const dispatch = useDispatch()
    const changeFieldHandler = event => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
    }

    useEffect(()=>{
        if (isAuth)
            navigate('/')
    }, [isAuth])

    const submitFormHandler = event => {
        event.preventDefault()
        dispatch( registrate(user) )
        setUser( initUser )
    }

    return (
        <div className="w-50 mx-auto mt-5">
            <form onSubmit={submitFormHandler}>
                <div className="mb-3 row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={changeFieldHandler}
                        placeholder="Enter User Name"
                        value={user.username}
                    />
                </div>
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={changeFieldHandler}
                        placeholder="email@examples.com"
                        value={user.email}
                    />
                </div>
                <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={changeFieldHandler}
                    />
                </div>
                <button type="submit" className="btn btn-success">SignIn</button>
            </form>
        </div>
    )
}