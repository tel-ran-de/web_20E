import React from 'react';

const Hello = (props) => {
    return (
        <>
            <h2>Hello, {props.name}, {props.age}</h2>
            <h2>Hello, {props.person.fName}, {props.person.lName}, {props.person.age}</h2>
        </>

    )
}

export default Hello;