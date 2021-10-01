import React, {useEffect, useState} from 'react';
import UsersList from "./UsersList";
import TodoList from "./TodoList";

const App = () => {

    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState({});
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        fetchUsers();
    }, []);

    useEffect( () => {
        if (!activeUser) return;
        fetchTodos();
    }, [activeUser] )

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        setUsers( await response.json());
    }

    const fetchTodos = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + activeUser.id);
        setTodos( await response.json());
    }

    const setUserIsActive = user => {
        setActiveUser(user);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <UsersList
                        users={users}
                        activeUser={activeUser}
                        onSetActiveUser={setUserIsActive}
                    />
                </div>
                <div className="col-8">
                    <TodoList />
                </div>
            </div>
        </div>
    )
}

export default App;