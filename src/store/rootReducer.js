const initialState = {
    list: [
        {
            id: 1,
            name: 'Light Plan',
            price: 25,
            unlimSupport: true,
            space: "5Gb",
            usersPerProject: 2,
            emailIntegration: false,
            unlimDownload: false
        },
        {
            id: 2,
            name: 'Standard Plan',
            price: 59,
            unlimSupport: true,
            space: "10Gb",
            usersPerProject: 5,
            emailIntegration: true,
            unlimDownload: false
        },
        {
            id: 3,
            name: 'Business Plan',
            price: 79,
            unlimSupport: true,
            space: "50Gb",
            usersPerProject: 10,
            emailIntegration: true,
            unlimDownload: true
        }
    ]
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_NEW_PLAN':
            return {
                ...state, list: [...state.list, action.payload]
            }


        default:
            return state
    }
}