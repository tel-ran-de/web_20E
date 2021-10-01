import React from 'react';
import UserItem from "./UserItem";

const UsersList = props => {

    const renderUsers = () => {
        if (!props.users.length){
            return (<UserItem color="danger" title="No Users"/>)
        }
        return props.users.map(user => (
            <UserItem
                key={user.id}
                color={props.activeUser.id===user.id ? 'info' : null}
                title={user.name}
                onSetActiveUser={props.onSetActiveUser}
                user={user}
            />
        ))
    }

    return (
        <>
            <h2>Users List</h2>
            <ul className="list-group">
                {renderUsers()}
            </ul>
        </>

    )
}

export default UsersList;