import React from 'react';
import GlobalContextProvider from "../data/GlobalContextProvider";
import Users from "./Users";
import Todo from "./Todo";

const App = () => {
    return (
        <GlobalContextProvider>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Users />
                    </div>
                    <div className="col-8">
                        <ul className="list-group">
                            <Todo />
                        </ul>
                    </div>
                </div>
            </div>
        </GlobalContextProvider>
    )
}

export default App;