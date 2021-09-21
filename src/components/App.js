import React from "react";
import Hello from "./Hello";
import Goodbye from "./Goodbye";


function P(props) {
    return (<p>{props.name}</p>);
}

function Li(props) {
    return (<li><P name={props.name} /></li>);
}

function Ul(props) {
    return (<ul><Li name={props.name} /></ul>);
}

const App = () => {
    const person = {
        fName: 'Ivan',
        lName: 'Ivanov',
        age: 35,
        email: 'vanya@mail.ru'
    }

    const names = ["Ivan", "Marya", "Misha", "John", "Smith", "Oleg", "Kristy"];

    return (
        <>
            <Hello name="Ivan" age={29} person={person} />
            <Goodbye name="Ivan"/>
            <Goodbye name="Marya"/>
            <Goodbye name="Misha"/>
            <Goodbye name="Oleg"/>
            <Goodbye name="Kristy"/>
            <hr/>
            { names.map(name => (<Goodbye key={name} name={name} />))}

            <Ul name="Ivan"/>

        </>
    );
}

export default App;