import React from 'react';

const Button = (props) => {
    return (
        <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={props.onClick}
        >{props.title}</button>
    )
}

export default Button;