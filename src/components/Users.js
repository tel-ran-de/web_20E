import React, {useContext} from 'react';
import {GlobalContext} from "../data/GlobalContextProvider";
const Users = () => {
    const {users, changeActiveUser, activeUser} = useContext(GlobalContext);
    return (
        users.map(user =>
            <h3
                style={{cursor: "pointer"}}
                className={activeUser && activeUser.id === user.id ? 'alert alert-success' : ''}
                key={user.id}
                onClick={()=> {changeActiveUser(user.id)}}
            >{user.name}</h3>)
    )
}

export default Users