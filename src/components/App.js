import React from 'react';
import GlobalContextProvider from "../data/GlobalContextProvider";
import {Switch, Route} from "react-router-dom";
import DashBoard from "./DashBoard";
import Navbar from "./Navbar";
import TodosPage from "./TodosPage";
import PostsPage from "./PostsPage";

const App = () => {
    return (
        <GlobalContextProvider>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path="/" exact={true}>
                        <DashBoard />
                    </Route>
                    <Route path="/todos">
                        <TodosPage />
                    </Route>
                    <Route path="/posts">
                        <PostsPage />
                    </Route>
                </Switch>
            </div>
        </GlobalContextProvider>
    )
}

export default App;