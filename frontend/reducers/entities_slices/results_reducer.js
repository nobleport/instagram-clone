import { RECEIVE_RESULTS } from "../../actions/user_actions";

const resultsReducer = (oldState={}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_RESULTS:
            return Object.assign({}, action.results)
        default:
            return oldState;
    }
}

export default resultsReducer;