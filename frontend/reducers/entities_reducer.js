import { combineReducers } from "redux";
import postsReducer from "./entities_slices/posts_reducer";
import usersReducer from "./users_reducer";
import commentsReducer from "./entities_slices/comments_reducer";
import likesReducer from "./entities_slices/likes_reducer";
import resultsReducer from "./entities_slices/results_reducer";

export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  likes: likesReducer,
  results: resultsReducer
})