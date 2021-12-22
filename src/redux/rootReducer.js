import { combineReducers } from "redux";
import userReducers from "./reducer";

const rootReducer = combineReducers({
  users: userReducers,
});

export default rootReducer;
