import { combineReducers } from "redux";
import postsReducer from "./entities_slices/posts_reducer";
import usersReducer from "./users_reducer";

export default combineReducers({
  users: usersReducer,
  posts: postsReducer
})