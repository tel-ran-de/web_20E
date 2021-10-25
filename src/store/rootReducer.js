import {ADD_ERROR, ADD_USER, FETCH_TODOS, FETCH_USERS} from "./constTypes";

const initialState = {
    users: [],
    todos: [],
    error: ''
}

export const rootReducer = ( state = initialState, {type, payload} ) => {

    switch ( type ) {
        case FETCH_USERS:
            return {...state, users: payload};

        case ADD_USER:
            return state;

        case ADD_ERROR:
            return {...state, error: payload}

        case FETCH_TODOS:
            return {...state, todos: payload}

        default:
            return state;
    }

}