import React, {useEffect} from 'react'
import {NavLink, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Users from "./Users";
import Navigation from "./Navigation";
import {doLogin} from "../store/actionsCreator";
import {useDispatch} from "react-redux";
import Registration from "./Registration";

export default props => {

    const dispatch = useDispatch()

    useEffect(() => {
        if ( localStorage.getItem('apiKeyToken') ) {
            dispatch(doLogin())
        }
    }, []);


    return (
        <div className="container">
            <Navigation/>
            <Routes>
                <Route path="/" index element={<Dashboard/>}/>
                <Route path="/signup" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/users" element={<Users/>}/>
            </Routes>
        </div>
    )
}