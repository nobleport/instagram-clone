export const RECEIVE_USER = 'RECEIVE_USER';
import * as UserApiUtil from '../util/user_util'

const receiveUser = (payload) => ({
    type: RECEIVE_USER,
    payload: payload
})

export const fetchUser = (userId) => dispatch=>(
    UserApiUtil.fetchUser(userId)
        .then((payload)=>dispatch(receiveUser(payload)))
)





