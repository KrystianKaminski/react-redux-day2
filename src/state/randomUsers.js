const SET_USERS = 'randomUsers/SET_USERS'
const START_FETCHING = 'randomUsers/START_FETCHING'
const STOP_FETCHING = 'randomUsers/STOP_FETCHING'
const ERROR_FETCHING = 'randomUsers/ERROR_FETCHING'


// redux-thunk calls
export const fetchUsersAsyncAction = () => (dispatch, getState) => {
    dispatch(startFetchingAction())
    fetch('https://randomuser.me/api')
        .then(r => r.json())
        .then(data => {
            dispatch(
                setUsersAction(data.results)
            )
            dispatch(stopFetchingAction())
        })
        .catch(() => {
            dispatch(errorFetchingAction())
        })
}

const stopFetchingAction = () => ({
    type: STOP_FETCHING
})

const startFetchingAction = () => ({
    type: START_FETCHING
})

const errorFetchingAction = () => ({
    type: ERROR_FETCHING
})

const setUsersAction = users => ({
    type: SET_USERS,
    users: users
})


const INITIAL_STATE = {
    users: [],
    isFetching: false,
    isError: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        case STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
                isError: false

            }
        case ERROR_FETCHING:
            return {
                ...state,
                isError: true,
                isFetching: false
            }

        default:
            return state
    }
}