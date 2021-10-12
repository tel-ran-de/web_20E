const initialState = {
    todos: [
        {
            id: 1,
            title: 'Todo item 1',
            completed: false
        },
        {
            id: 2,
            title: 'Todo item 2',
            completed: false
        }
    ]
}

export const reducer = (state = initialState, action) => {
    let array, index
    switch (action.type) {
        case 'ADD_TODO':
            array = [...state.todos]
            array.push(action.payload)
            return {...state, todos: array }
        case 'REMOVE_TODO':
            array = [...state.todos]
            array = array.filter(ele => ele.id !== action.payload)
            return {...state, todos: array }
        default:
            return state
    }
}
