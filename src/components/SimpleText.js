import React, {useState} from 'react';

export const SimpleText = () => {
    const people = ['Ivan', 'Marya', 'John'];

    const renderUsersInfo = () => {
        return people.map((person) => (<li key={person}>{person} is here</li>))
    }

    const styles = {
        'color': 'red',
        'fontSize': '20px'
    }

    const [isTrue, setIsTrue] = useState(false);

    const clickHandle = () => {
        setIsTrue(isTrue => !isTrue)
    }

    return (
        <>
            <p style={isTrue ? styles : null}>
                Lorem ipsum dolor sit amet.
            </p>
            <ul>
                {renderUsersInfo()}
            </ul>
            <button
                onClick={clickHandle}
            >ClickMe!</button>
        </>

    )
}