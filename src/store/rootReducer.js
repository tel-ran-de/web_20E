import {ADD_ERROR, ADD_USER, FETCH_USERS} from "./constTypes";

const initialState = {
    users: [],
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

        default:
            return state;
    }

}