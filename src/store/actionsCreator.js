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
            if ( response.status === 200 ) {
                localStorage.setItem('apiKeyToken', data.accessToken)
                dispatch( doLogin() )
            } else {
                alert(data.message)
            }
        } catch (e) {
            console.log( e.message )
        }
    }
}

export const registrate = (user) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL}/auth/signup`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            if ( response.status === 200 ) {
                dispatch(logIn(user))
            } else {
                alert(data.message)
            }
        } catch (e) {
            console.log( e.message )
        }
    }
}

export const getAllUsers = () => {
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

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('apiKeyToken')
        dispatch(doLogout())
        dispatch(setAllUsers([]))
    }
}

const setAllUsers = (data) => {
    return {
        type: FETCH_USERS,
        payload: data
    }
}

export const doLogin = () => {
    return {
        type: LOGIN
    }
}

const doLogout = () => {
    return {
        type: LOGOUT
    }
}