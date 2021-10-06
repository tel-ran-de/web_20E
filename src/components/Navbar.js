import React from 'react'
import {NavLink} from "react-router-dom";

export default props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/" exact={true} className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/todos"  className="nav-link">ToDo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/posts" className="nav-link">Posts</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)