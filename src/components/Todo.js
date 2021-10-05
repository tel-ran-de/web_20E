import React, {useContext} from 'react';
import {GlobalContext} from "../data/GlobalContextProvider";

const Todo = () => {
    const context = useContext(GlobalContext);
    return (
        !context.activeUser || !context.getTodosByUserId().length
            ?
            <li className="list-group-item">No records</li>
            :
            context.getTodosByUserId().map(todo =>
                <li
                    className="list-group-item"
                    key={todo.id}
                >{todo.title}</li>
            )
    )
}

export default Todo;