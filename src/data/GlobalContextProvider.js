import React, {createContext, useEffect, useState} from 'react';

export const GlobalContext = createContext({})

const GlobalContextProvider = (props) => {

    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUSer] = useState(null);
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        fetchUsers();
        fetchTodos();
    },[])

    const fetchUsers = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await response.json());
        } catch (e) {
            console.log(e.message);
        }
    }

    const fetchTodos = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            setTodos(await response.json());
        } catch (e) {
            console.log(e.message);
        }
    }

    const getTodosByUserId = () => todos.filter(t => t.userId === activeUser.id);

    const changeActiveUser = userId => {
        const idx = users.findIndex(user => user.id===userId);
        if (idx === -1) return;
        setActiveUSer(users[idx]);
    }


    return (
        <GlobalContext.Provider value={{
            users,
            activeUser,
            changeActiveUser,
            getTodosByUserId
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;