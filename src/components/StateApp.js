import React from 'react';
import Counter from "./Counter";
import DecCounter from "./DecCounter";

const StateApp = () => {
    return (
        <div style={{width:'75%', margin:'auto'}}>
            <h2>State</h2>
            <Counter />
            <Counter />

            <DecCounter />
            <DecCounter />
        </div>
    )
}

export default StateApp