import { combineReducers } from "redux";
import entities_reducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";

export default combineReducers({
  entities: entities_reducer,
  session: sessionReducer,
  errors: errorsReducer
});