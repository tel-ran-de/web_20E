import React from 'react';
import {Switch, Route} from "react-router-dom";
import Todo from "./Todo";
import FeedBack from "./FeedBack";

const RouterSwitch = () => (
    <Switch>
        <Route exact={true} path="/">
            <h2>Home</h2>
        </Route>
        <Route path="/about">
            <h2>About</h2>
        </Route>
        <Route path="/todo">
            <Todo/>
        </Route>
        <Route path="/feedback">
            <FeedBack/>
        </Route>
    </Switch>
);

export default RouterSwitch;