import React from 'react';
import Navigation from "./Navigation";
import RouterSwitch from "./RouterSwitch";

const App = () => {
    return (
        <div className="container">
            <Navigation />
            <RouterSwitch />
        </div>
    )
}

export default App;