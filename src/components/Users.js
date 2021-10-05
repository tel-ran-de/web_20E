import React, {useContext} from 'react';
import {GlobalContext} from "../data/GlobalContextProvider";
const Users = () => {
    const {users, changeActiveUser} = useContext(GlobalContext);
    return (
        users.map(user =>
            <h3
                key={user.id}
                onClick={()=> {changeActiveUser(user.id)}}
            >{user.name}</h3>)
    )
}

export default Users