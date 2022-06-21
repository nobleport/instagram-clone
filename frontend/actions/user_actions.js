export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
import * as UserApiUtil from '../util/user_util'

const receiveUser = (payload) => ({
    type: RECEIVE_USER,
    payload: payload
})

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

const receiveResults = (results) => ({
    type: RECEIVE_RESULTS,
    results
})

export const fetchUser = (userId) => dispatch=>(
    UserApiUtil.fetchUser(userId)
        .then((payload)=>dispatch(receiveUser(payload)))
)

export const fetchUsers = () => dispatch => (
    UserApiUtil.fetchUsers()
        .then((users)=>dispatch(receiveUsers(users)))
)

export const fetchResults = (query) => dispatch => (
    UserApiUtil.fetchResults(query)
        .then((users)=>dispatch(receiveResults(users)))
)



