import React from 'react';

const UserItem = props => {
    return (
        <li
            className={`list-group-item list-group-item-${props.color}`}
            onClick={() => {
                props.onSetActiveUser(props.user);
            }}
        >
            {props.title}
        </li>
    )
}

export default UserItem;