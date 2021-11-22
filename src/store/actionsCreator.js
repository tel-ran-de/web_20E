import {FETCH_USERS, LOGIN, LOGOUT} from "./actions";

const URL = 'http://localhost:8080/api'

export const logIn = (user) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/auth/signin`, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            localStorage.setItem('apiKeyToken', data.accessToken)
            dispatch( doLogin() )
        } catch (e) {
            console.log( e.message )
        }
    }
}

const getAllUsers = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/users`, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('apiKeyToken')
                }
            })
            const data = await response.json()
            dispatch( setAllUsers(data) )
        } catch (e) {
            console.log( e.message )
        }
    }
}

const setAllUsers = (data) => {
    return {
        type: FETCH_USERS,
        payload: data
    }
}

const doLogin = () => {
    return {
        type: LOGIN
    }
}

export const doLogout = () => {
    return {
        type: LOGOUT
    }
}