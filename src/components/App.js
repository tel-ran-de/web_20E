import React from 'react'
import {NavLink, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Users from "./Users";

export default props => (
    <div className="container">
        <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/login" >Login</NavLink>
            <NavLink to="/users" >Users</NavLink>

        </nav>
        <Routes>
            <Route path="/" index element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users/>} />
        </Routes>
    </div>
)