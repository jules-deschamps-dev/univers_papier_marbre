import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import userReducer from "./user.reducer";
import eventsReducer from "./events.reducer";

export default combineReducers({
  postReducer,
  userReducer,
  eventsReducer,
});
