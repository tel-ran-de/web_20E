import {ADD_ERROR, FETCH_TODOS, FETCH_USERS} from "./constTypes";

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch(fetchingUsers(data));
        } catch (e) {
            console.log( e.message );
            dispatch(fetchError(e.message));
        }
    }
}



export const getTodosByUserId = (userId) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId);
            const data = await response.json();
            dispatch(fetchingTodos(data));
        } catch (e) {
            console.log( e.message );
            dispatch(fetchError(e.message));
        }
    }
}

const fetchingUsers = (data) => {
    return {
        type: FETCH_USERS,
        payload: data
    }
}

const fetchingTodos = (data) => {
    return {
        type: FETCH_TODOS,
        payload: data
    }
}

const fetchError = (msg) => {
    return {
        type: ADD_ERROR,
        payload: msg
    }
}