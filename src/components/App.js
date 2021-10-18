import React from 'react'
import Header from "./Header";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Home";
import AddNew from "./AddNew";

const App = () => (
    <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/add-new" component={AddNew}/>
            </Switch>
    </BrowserRouter>

)

export default App