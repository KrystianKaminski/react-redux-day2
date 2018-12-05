const SET_USERS = 'randomUsers/SET_USERS'


// redux-thunk calls
const fetchUsersAsyncAction = () => (dispatch, getState) => {
    
    fetch('https://randomuser.me/api')
        .then(r => r.json())
        .then(data => {
          dispatch(
            setUsersAction(data.results)
          )
        })
}

export const setUsersAction = users => ({
    type: SET_USERS,
    users: users
})


const INITIAL_STATE = {
    users: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case SET_USERS: 
            return {
                ...state,
                users: action.users
            }


        default:
            return state
    }
}