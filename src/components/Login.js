import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {logIn} from "../store/actionsCreator";

const initUser = {
    email: '',
    password: ''
}

export default () => {

    const [user, setUser] = useState( initUser )
    const dispatch = useDispatch()
    const changeFieldHandler = event => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
    }

    const submitFormHandler = event => {
        event.preventDefault()
        dispatch( logIn(user) )
        setUser( initUser )
    }

    return (
        <div className="w-50 mx-auto mt-5">
            <form onSubmit={submitFormHandler}>
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