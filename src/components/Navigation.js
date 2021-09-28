import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" exact={true} to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/todo">To-Do</NavLink>
                </div>
            </div>
        </div>
    </nav>
)

export default Navigation;