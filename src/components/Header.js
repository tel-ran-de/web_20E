import React from 'react'
import {NavLink} from "react-router-dom";

export default () => (
    <section  className="header">
        <div className="container">
            <nav className="nav">
                <NavLink className="nav-link" to="/" exact={true} >Home</NavLink>
                <NavLink className="nav-link" to="/add-new" >Add New</NavLink>
            </nav>
        </div>
    </section>
)