import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import postIdReducer from "./post_id_reducer"

export default combineReducers({
    modal: modalReducer,
    postId: postIdReducer
})